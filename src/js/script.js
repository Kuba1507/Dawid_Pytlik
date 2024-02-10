const burgerBtn = document.querySelector('.nav__burger-btn')
const navigation = document.querySelector('.nav__navbar')
const navItems = document.querySelectorAll('.nav__navbar-item-link')

const handleNav = () => {
	navigation.classList.toggle('show-mobile')
}

const closeNav = () => {
	navigation.classList.remove('show-mobile')
}

burgerBtn.addEventListener('click', handleNav)
navItems.forEach(item => {
	item.addEventListener('click', closeNav)
})
