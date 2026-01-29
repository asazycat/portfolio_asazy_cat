
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const burgerButton = document.getElementById('burgerMenu');
    burgerButton.addEventListener('click', () => {
        nav.style.display === 'block' ? nav.style.display = 'none' : nav.style.display = 'block'
    })
    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1000) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'row';
            // nav.style.justifyContent = 'space-around'

        } else {
            nav.style.display = 'none'
        }
    })
})

