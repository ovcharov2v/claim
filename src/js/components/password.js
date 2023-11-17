const passwordsList = document.querySelectorAll('.form-group--password')

passwordsList?.forEach((password) => {
	const btn = password.querySelector('.form-group__show-btn')
	btn.addEventListener('click', () => {
		//password.classList.toggle('form-group--password-show')
		const input = password.querySelector('.form-group__input')
		if(password.classList.contains('form-group--password-show')) {
			input.type="password"
			password.classList.remove('form-group--password-show')
		}
		else {
			input.type="text"
			password.classList.add('form-group--password-show')
		}
	})
})
