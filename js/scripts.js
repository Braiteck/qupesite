$(() => {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 750,
		// autoplay: true,
		autoplayTimeout: 5000,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>'
		],
		onTranslate: event => {
			$(event.target).trigger('stop.owl.autoplay')

			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			currentIndex < 10
				? $('.main_slider .count .current').text('0' + currentIndex)
				: $('.main_slider .count .current').text(currentIndex)
		},
		onTranslated: event => {
			$(event.target).trigger('play.owl.autoplay', [4250, 0])
		}
	})


	// Почему стоит выбрать Quality Performance?
	$('.advantages .slider').owlCarousel({
		nav: true,
		dots: true,
		loop: true,
		margin: 20,
		smartSpeed: 500,
		dotsEach: true,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>'
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		},
		onInitialized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)
		},
		onResized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)
		}
	})


	// Проектная группа
	$('.team .slider').owlCarousel({
		nav: true,
		dots: true,
		loop: true,
		margin: 20,
		smartSpeed: 500,
		dotsEach: true,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>'
		],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1280: {
				items: 4
			}
		},
		onInitialized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)
		},
		onResized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)
		}
	})


	// Услуги
	$('.services .slider').owlCarousel({
		nav: true,
		dots: true,
		loop: false,
		smartSpeed: 500,
		dotsEach: true,
		navText: [
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>',
			'<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_left"></use></svg>'
		],
		responsive: {
			0: {
				items: 1,
				margin: 20
			},
			768: {
				items: 2,
				margin: 20
			},
			1024: {
				items: 2,
				margin: 40
			},
			1280: {
				items: 3,
				margin: 40
			},
			1440: {
				items: 3,
				margin: 60
			}
		},
		onInitialized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)

			serviceHeight($(event.target), $(event.target).find('.service').length)
		},
		onResized: event => {
			let dotsW = $(event.target).find('.owl-dots').width(),
				arrowW = $(event.target).find('button.owl-prev').width()

			$(event.target).find('button.owl-prev').css('margin-left', dotsW / -2 - arrowW * 1.5)
			$(event.target).find('button.owl-next').css('margin-right', dotsW / -2 - arrowW * 1.5)

			serviceHeight($(event.target), $(event.target).find('.service').length)
		}
	})


	// Поиск
	$('header .search_btn, #search_modal .close').click(function (e) {
		e.preventDefault()

		$('#search_modal').toggleClass('show')
	})


	// Меню
	$('header .menu .sub_menu .on .spoler_link a').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			parent.find('.hide').slideUp(500)
		} else {
			$(this).addClass('active')

			parent.find('.hide').slideDown(500)
		}
	})


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').fadeIn(300)
	})

	$('header .menu .close').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').fadeOut(200)
	})

	$('header .menu .sub_menu .mob_title').click(function (e) {
		e.preventDefault()

		let parent = $(this)
		let accordion = $(this).closest('.tabs_container')

		if (parent.hasClass('active')) {
			parent.removeClass('active')
			parent.next().slideUp(300)
		} else {
			accordion.find('.mob_title').removeClass('active')
			accordion.find('.tab_content').slideUp(300)

			parent.addClass('active')
			parent.next().slideDown(300)
		}
	})


	if (is_touch_device()) {
		$('header .menu .item > a.sub_link').addClass('touch_link')

		$('header .menu .item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .menu .sub_menu').removeClass('show')
				$dropdown.addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})

		$('body').on('click', 'header .menu .item > a.touch_link .arr', function (e) {
			var submenu = $(this).parent().next();
			if ($(submenu).hasClass('show')) {
				e.preventDefault()
				$(submenu).removeClass('show')
			} else {
				e.preventDefault()
				$(submenu).addClass('show')
			}
		})
		$('header .menu .item > a.touch_link .sub_menu .tabs .mob_title .arr2 ').click(function (e) {
			e.stopPropagation()
			e.preventDefault()
			e.stopImmediatePropagation()
			var tabcontent = $(this).parent().next();
			if ($(tabcontent).hasClass('show')) {
				$(tabcontent).removeClass('show')
			} else {
				$(tabcontent).addClass('show')
			}
		})
		$('header .menu .sub_menu .tabs_container .mob_title span:nth-child(1)').click(function (e) {
			e.stopPropagation()
			e.preventDefault()
			e.stopImmediatePropagation()
			var url = $(this).parent().attr('data-url')
			url = 'https://qupe.ru/' + url
			document.location.href = url
		})
	}
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight()

	$('header:not(.absolute)').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Выравнивание элементов в сетке
	$('.articles .row').each(function () {
		articleHeight($(this), parseInt($(this).css('--articles_count')))
	})

	$('.tariffs .row').each(function () {
		tariffHeight($(this), parseInt($(this).css('--tariffs_count')))
	})
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false
	$('.header_wrap').height('auto')

	setTimeout(() => {
		headerInit = true
		headerHeight = $('header').outerHeight()

		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > 0
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)


	// Выравнивание элементов в сетке
	$('.articles .row').each(function () {
		articleHeight($(this), parseInt($(this).css('--articles_count')))
	})

	$('.tariffs .row').each(function () {
		tariffHeight($(this), parseInt($(this).css('--tariffs_count')))
	})
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})


// Выравнивание услуг
function serviceHeight(context, step) {
	let start = 0,
		finish = step,
		$services = context.find('.service')

	$services.find('.name, .desc').height('auto')

	$services.each(function () {
		setHeight($services.slice(start, finish).find('.name'))
		setHeight($services.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}

// Выравнивание статей
function articleHeight(context, step) {
	let start = 0,
		finish = step,
		$articles = context.find('.article')

	$articles.find('.name, .desc').height('auto')

	$articles.each(function () {
		setHeight($articles.slice(start, finish).find('.name'))
		setHeight($articles.slice(start, finish).find('.desc'))

		start = start + step
		finish = finish + step
	})
}

// Выравнивание тарифов
function tariffHeight(context, step) {
	let start = 0,
		finish = step,
		$tariffs = context.find('.tariff')

	$tariffs.find('.desc, .features').height('auto')

	$tariffs.each(function () {
		setHeight($tariffs.slice(start, finish).find('.desc'))
		setHeight($tariffs.slice(start, finish).find('.features'))

		start = start + step
		finish = finish + step
	})
}