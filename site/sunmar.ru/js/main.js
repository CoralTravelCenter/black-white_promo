import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const toggler = document.querySelector('#light-on-trigger')
	const text = document.querySelector('section.kv .content .text')
	const desktop_img = document.querySelector(
		'section.kv .kv-main-banner picture img'
	)
	const mobile_img = document.querySelector(
		'section.kv .kv-main-banner picture source'
	)

	toggler.addEventListener('click', () => {
		text.classList.remove('js-hidden')
		desktop_img.src = '/site/sunmar.ru/assets/intro-bg-light.jpg'
		mobile_img.srcset = '/site/sunmar.ru/assets/intro-bg-mobile-light.jpg'
	})
})
