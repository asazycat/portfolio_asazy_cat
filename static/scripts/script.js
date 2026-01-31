
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

    document.getElementsByClassName('techType')[0].addEventListener('click', (e) => {
        let techType = e.target.textContent.split(' ').join('')
        techType = techType[0].toLowerCase() + techType.substring(1)
        const techList = document.getElementsByClassName('techList')[0].children
        Array.from(techList).forEach((div) => {
            console.log(div)
            if(div.className !== techType) {
                div.style.display = 'none';

            }
            else {
                div.style.display = 'grid';
            }
        })

    })

   const three_projects = Array.from(document.getElementsByClassName('projects')[0].children).filter((element,index) => index <= 2 )
   console.log(document.getElementsByClassName('projects')[0].children)
   console.log(three_projects, '___')
   document.getElementsByClassName('projects')[0].replaceChildren()
   three_projects.forEach((each_child) => {
        document.getElementsByClassName('projects')[0].appendChild(each_child)
   })
    

})

