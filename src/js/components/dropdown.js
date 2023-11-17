document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.dropdown')
	if(!dropdownList.length) return

	dropdownList.forEach((dropdown) => {
		dropdown.querySelector('.dropdown__current-box').addEventListener('click', () => {
			const active = document.querySelector('.dropdown--active')
			if(active && dropdown !== active) {
				active.classList.remove('dropdown--active')
			}
			dropdown.classList.toggle('dropdown--active')
		})

		const current = dropdown.querySelector('.dropdown__value')
		const input = dropdown.querySelector('.dropdown__input')
		const dropdownItems = dropdown.querySelectorAll('.dropdown__list-item')

		dropdownItems.forEach((item)=>{
			item.addEventListener('click', () => {
				current.innerHTML = item.innerHTML
				input.value = item.querySelector('.dropdown__title').innerText
				const oldSelected = dropdown.querySelector('.dropdown__list-item--selected')
				oldSelected.classList.remove('dropdown__list-item--selected')
				item.classList.add('dropdown__list-item--selected')
				item.closest('.dropdown').classList.remove('dropdown--active')
			})
		})
	})

	document.addEventListener('click', (evt) => closeAllDropdowns(evt))

	function closeAllDropdowns(evt) {
		if(!evt?.target.closest('.dropdown')) {
			const activeList = document.querySelectorAll('.dropdown--active')
			activeList.forEach((dropdown) => {
				dropdown.classList.remove('dropdown--active')
			})
		}
	}
})
