const profileBox = document.querySelector('.header__profile-box')
profileBox?.addEventListener('click', () => {
	profileBox.closest('.header__profile').classList.toggle('header__profile--active')
})

const navElemsList = document.querySelectorAll('.header__nav-elem--dropdown')
navElemsList?.forEach((navElem) => {
	navElem.addEventListener('click',() =>{
		navElem.classList.toggle('header__nav-elem--active')
	})
})
