
document.addEventListener('DOMContentLoaded', () => {
    const nav = document?.getElementsByTagName('nav')[0];
    const burgerButton = document.getElementById('burgerMenu');
    const allProjects = document.getElementsByClassName('projects')[0]?.children ?? [];
    const allProjectsSpread = [...allProjects];
    const allProjectsCount = document.getElementsByClassName('projects')[0]?.children.length;
    const programmingLanguages = document.getElementsByClassName('programmingLanguages')[0];
    const webDevelopment = document.getElementsByClassName('webDevelopment')[0];
    let filteredProjects = [];
    let filterTags = [];

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
            if(div.className !== techType) {
                div.style.display = 'none';

            }
            else {
                div.style.display = 'grid';
            }
        })

    });

    programmingLanguages.addEventListener('click', (e) => {
        if(e.target.className === 'techImg') {
        e.target.classList.remove('techImg');
        e.target.classList.add('techImg_selected');
       } else if (e.target.className === 'techImg_selected') {
            e.target.classList.remove('techImg_selected');
            e.target.classList.add('techImg');
       }
       Array.from(e.target.parentElement.children).forEach((each_tech) => {
            each_tech.className === 'techImg_selected' 
            ? filterTags.push(each_tech.alt) 
            : filterTags = filterTags.filter((ele) => ele !== each_tech.alt)
            
       });
        filteredProjects = filterTags.length !== 0 ? allProjectsSpread.filter((eachPro) => {
        const eachProTechList = eachPro.children[1].textContent.split(', ')
         for (let i = 0; i < filterTags.length; i++) {
            if(eachProTechList.includes(filterTags[i])) return eachPro
         }
       }) : allProjectsSpread;
       document.getElementsByClassName('projects')[0].replaceChildren()
       filteredProjects.forEach((eachPro) => document.getElementsByClassName('projects')[0].prepend(eachPro))
       show3items(0,2,filteredProjects)
    });

    webDevelopment.addEventListener('click', (e) => {
       if(e.target.className === 'techImg') {
        e.target.classList.remove('techImg');
        e.target.classList.add('techImg_selected');
       } else if (e.target.className === 'techImg_selected') {
            e.target.classList.remove('techImg_selected');
            e.target.classList.add('techImg');
       }
       Array.from(e.target.parentElement.children).forEach((each_tech) => {
            each_tech.className === 'techImg_selected' 
            ? filterTags.push(each_tech.alt) 
            : filterTags = filterTags.filter((ele) => ele !== each_tech.alt)
            
       });
        filteredProjects = filterTags.length !== 0 ? allProjectsSpread.filter((eachPro) => {
        const eachProTechList = eachPro.children[1].textContent.split(', ')
         for (let i = 0; i < filterTags.length; i++) {
            if(eachProTechList.includes(filterTags[i])) return eachPro
         }
       }) : allProjectsSpread;
       document.getElementsByClassName('projects')[0].replaceChildren()
       filteredProjects.forEach((eachPro) => document.getElementsByClassName('projects')[0].prepend(eachPro))
       show3items(0,2,filteredProjects)
    })


   for (let i = 0; i < Math.floor(allProjectsCount) / 3; i++) {
        let button = document.createElement('button');
        button.setAttribute('class', 'pageButton');
        document.getElementById('slideButtons').prepend(button)
   }
   
   document.getElementById('slideButtons').addEventListener('click', (e) => {
    if(Array.from(e.currentTarget.children).indexOf(e.target) >= 0) {
        const start = 3 * (Array.from(e.currentTarget.children).indexOf(e.target));
        const end = start + 2;
        show3items(start,end,filteredProjects.length > 0 ? filteredProjects : allProjectsSpread  )
    }
   });

   show3items(0,2,allProjectsSpread)

})

function show3items(start, end, HTMLCollection) {
 if (HTMLCollection.length > 3) {
     const three_projects = Array.from(HTMLCollection).filter((element,index) => index >= start && index <= end )
   document.getElementsByClassName('projects')[0].replaceChildren()
   three_projects.forEach((each_child) => {
        document.getElementsByClassName('projects')[0].prepend(each_child)
   });
 }
  
}