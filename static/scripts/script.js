
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const burgerButton = document.getElementById('burgerMenu');
    const allProjects = document.getElementsByClassName('projects')[0].children;
    const all6 = [...allProjects];
    const allProjectsCount = document.getElementsByClassName('projects')[0].children.length;
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

   show3items(0,2,[...allProjects])

   for (let i = 0; i < Math.floor(allProjectsCount) / 3; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'pageButton');
        document.getElementById('slideButtons').appendChild(button)
   }
   
   document.getElementById('slideButtons').addEventListener('click', (e) => {
    if(Array.from(e.currentTarget.children).indexOf(e.target) >= 0) {
        const start = 3 * (Array.from(e.currentTarget.children).indexOf(e.target));
        const end = start + 2;
        show3items(start,end,[...all6])
    }
   })

})

function show3items(start, end, HTMLCollection) {
    console.log(start,end)
    const three_projects = Array.from(HTMLCollection).filter((element,index) => index >= start && index <= end )
    
   document.getElementsByClassName('projects')[0].replaceChildren()
   three_projects.forEach((each_child) => {
        document.getElementsByClassName('projects')[0].appendChild(each_child)
   });
}