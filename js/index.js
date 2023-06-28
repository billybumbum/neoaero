const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const video = document.getElementById('section-one-video');

if (video) {
	video.play();
  }

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'



new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
})


