const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
    afterLoad: function(origin, destination, direction){
        const video = document.getElementById('section-one-video');
        // if we've scrolled to the section containing the video, play it
        if(destination.index == 0){
            video.play();
        }
    },
    onLeave: function(origin, destination, direction){
        const video = document.getElementById('section-one-video');
        // if we're leaving the section with the video, pause it
        if(origin.index == 0){
            video.pause();
        }
    }
})
