document.addEventListener('DOMContentLoaded', () => {
	const dropdownList = document.querySelectorAll('.dropdown')
	if(!dropdownList.length) return

	dropdownList.forEach((select) => {
		select.addEventListener('click', (evt) => {
			evt.stopPropagation()
			//closeAllDropdowns()
			if(!evt.target.closest('.dropdown__list-box')) {
				select.classList.toggle('dropdown--active')
			}
		})

		const current = select.querySelector('.dropdown__value')
		const input = select.querySelector('.dropdown__input')
		const dropdownItems = select.querySelectorAll('.dropdown__list-item')

		dropdownItems.forEach((item)=>{
			item.addEventListener('click', () => {
				current.innerHTML = item.innerHTML
				input.value = item.querySelector('.dropdown__title').innerText
				const oldSelected = select.querySelector('.dropdown__list-item--selected')
				oldSelected.classList.remove('dropdown__list-item--selected')
				item.classList.add('dropdown__list-item--selected')
				closeAllDropdowns()
			})
		})
	})

	document.addEventListener('click', closeAllDropdowns)

	function closeAllDropdowns() {
		const activeList = document.querySelectorAll('.dropdown--active')
		dropdownList.forEach((dropdown) => {
			dropdown.classList.remove('dropdown--active')
		})
	}
})
