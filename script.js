const toggleMenu = document.querySelector('#mobile-menu')

const menuLinks = document.querySelector('.navbar-menu')


toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

