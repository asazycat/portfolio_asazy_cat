
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementsByTagName('nav')[0];
    const burgerButton = document.getElementById('burgerMenu');
    const allProjects = document.getElementsByClassName('projects')[0]?.children ?? [];
    const allProjectsSpread = [...allProjects];
    const allProjectsCount = document.getElementsByClassName('projects')[0]?.children.length;
    const programmingLanguages = document.getElementsByClassName('programmingLanguages')[0];
    const webDevelopment = document.getElementsByClassName('webDevelopment')[0];
    let filteredProjects = [];
    let filterTags = [];

    burgerButton.addEventListener('click', (e) => {
         e.stopImmediatePropagation()
        nav.style.display === 'block' ? nav.style.display = 'none' : nav.style.display = 'block'
    })
    window.addEventListener('resize', (e) => {
         e.stopImmediatePropagation()
        if(window.innerWidth >= 1000) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'row';
            // nav.style.justifyContent = 'space-around'
           const qualDetails = document.getElementsByClassName('qualificationsDetails')[0]
          
           qualDetails.style.display = 'block'

        } else {
            nav.style.display = 'none'
            const qualDetails = document.getElementsByClassName('qualificationsDetails')[0]
           
            qualDetails.style.display = 'none'
        }
    })

    ////////////////////////
    Array.from(document.getElementsByClassName('eachSkill'))?.forEach((element) => {
        element.addEventListener('mouseenter', (e) => {
        e.target.firstElementChild.style.display = 'none'
        e.target.lastElementChild.style.display = 'block'
    })
    })

   Array.from(document.getElementsByClassName('eachSkill'))?.forEach((element) => {
        element.addEventListener('mouseleave', (e) => {
         e.target.firstElementChild.style.display = 'block'
        e.target.lastElementChild.style.display = 'none'
    })
    })
    ////////////////////////////

    document.getElementsByClassName('techType')[0]?.addEventListener('click', (e) => {
         e.stopImmediatePropagation()
        let techType = e.target.textContent.split(' ').join('')
        techType = techType[0].toLowerCase() + techType.substring(1)
        const techList = document.getElementsByClassName('techList')[0]?.children
        Array.from(techList).forEach((div) => {
            if(div.className !== techType) {
                div.style.display = 'none';

            }
            else {
                div.style.display = 'grid';
            }
        })

    });

    programmingLanguages?.addEventListener('click', (e) => {
         e.stopImmediatePropagation()
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
        filteredProjects = filterTags.length !== 0 ? allProjectsSpread?.filter((eachPro) => {
        const eachProTechList = eachPro.children[1].textContent.split(', ')
         for (let i = 0; i < filterTags.length; i++) {
            if(eachProTechList.includes(filterTags[i])) return eachPro
         }
       }) : allProjectsSpread;
       document.getElementsByClassName('projects')[0]?.replaceChildren()
       filteredProjects.forEach((eachPro) => document.getElementsByClassName('projects')[0].prepend(eachPro))
       show3items(0,2,filteredProjects)
    });

    webDevelopment?.addEventListener('click', (e) => {
         e.stopImmediatePropagation()
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
        filteredProjects = filterTags.length !== 0 ? allProjectsSpread?.filter((eachPro) => {
        const eachProTechList = eachPro.children[1].textContent.split(', ')
         for (let i = 0; i < filterTags.length; i++) {
            if(eachProTechList.includes(filterTags[i])) return eachPro
         }
       }) : allProjectsSpread;
       document.getElementsByClassName('projects')[0]?.replaceChildren()
       filteredProjects.forEach((eachPro) => document.getElementsByClassName('projects')[0].prepend(eachPro))
       show3items(0,2,filteredProjects)
    })


   for (let i = 0; i < Math.floor(allProjectsCount) / 3; i++) {
        let button = document.createElement('button');
        button?.setAttribute('class', 'pageButton');
        document.getElementById('slideButtons')?.prepend(button)
   }
   
   document.getElementById('slideButtons')?.addEventListener('click', (e) => {
    if(Array.from(e.currentTarget.children).indexOf(e.target) >= 0) {
        const start = 3 * (Array.from(e.currentTarget.children).indexOf(e.target));
        const end = start + 2;
        show3items(start,end,filteredProjects.length > 0 ? filteredProjects : allProjectsSpread  )
    }
   });

   show3items(0,2,allProjectsSpread);

   ///////////

   for (let i =0 ; i < document.getElementsByClassName('topics').length; i++) {
       const replaceArray = Array.from(document.getElementsByClassName('topics')[i].childNodes).filter((ele) =>  ele.nodeName != '#text')
         document.getElementsByClassName('topics')[i]?.replaceChildren()
       for(let j =0; j < replaceArray.length; j++) {
            document.getElementsByClassName('topics')[i]?.append(replaceArray[j])
       }

    for (let i = 0; i < document.getElementsByClassName('show').length; i++) {
         document.getElementsByClassName('show')[i]?.addEventListener('click',(e) => {
            if(e.target.parentElement.nextElementSibling.style.display === 'none') {
                e.target.parentElement.nextElementSibling.style.display = 'grid';
                e.target.textContent = 'Show Less';
                e.target.style.backgroundColor = 'grey' 
                e.target.style.color ='rgba(158, 195, 73, 0.83)'
            } else { 
                e.target.parentElement.nextElementSibling.style.display = 'none';
                e.target.textContent = 'Show More';
                e.target.style.color ='black'
                e.target.style.backgroundColor = '';
            }
            e.stopImmediatePropagation()
        })
    }

    document.getElementsByClassName('qualifications')[0]?.addEventListener('click',(e) => {
         e.stopImmediatePropagation();
        document.getElementsByClassName('qualificationsDetails')[0].children[0].textContent = `${e.target.textContent}`
       
    })
   
    
   }
   
    document.getElementsByClassName('listOfQualifications')[0]?.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        console.log(e.target.parentElement.children[1].children[1])
        const cert_link = e.target.parentElement.children[1].children[1].children[2].textContent
        console.log(cert_link)
            document.getElementsByClassName('cert_img')[0]?.setAttribute('src', cert_link)
    })
    
    
    document.getElementsByClassName('cert_img')[0]?.addEventListener('click', (e) => {
        e.stopPropagation()
    });

    document.getElementsByClassName('qualificationsDetails')[0]?.addEventListener('click',(e) => {
        e.stopImmediatePropagation()
        console.log(e.target)
        if(e.target.textContent === 'Description') {
            e.target.style.color = '#CBDB44';
            e.target.previousElementSibling.style.color = '#f9fbec';
            e.target.nextElementSibling.style.color = '#f9fbec';

            document.getElementById(`${e.target.textContent}`).previousElementSibling.style.display = 'none';
            document.getElementById(`${e.target.textContent}`).style.display = 'block';
            document.getElementById(`${e.target.textContent}`).nextElementSibling.style.display = 'none';
        } else if(e.target.textContent === 'Contents') {
            e.target.style.color = '#CBDB44';
            e.target.previousElementSibling.style.color = '#f9fbec';
            e.target.previousElementSibling.previousElementSibling.style.color = '#f9fbec';

            console.log(document.getElementById(`${e.target.textContent}`))
            document.getElementById(`${e.target.textContent}`).previousElementSibling.style.display = 'none';
            document.getElementById(`${e.target.textContent}`).style.display = 'block';
            document.getElementById(`${e.target.textContent}`).previousElementSibling.previousElementSibling.style.display = 'none';
        } else if(e.target.textContent === 'Certificate') {
            e.target.style.color = '#CBDB44';
            e.target.nextElementSibling.style.color = '#f9fbec';
            e.target.nextElementSibling.nextElementSibling.style.color = '#f9fbec';
           
            document.getElementsByClassName('cert_img')[0].style.display = 'block';
            document.getElementById('Description').style.display = 'none';
            document.getElementById('Contents').style.display = 'none';
        }
    })


})

function show3items(start, end, HTMLCollection) {
 if (HTMLCollection.length > 3) {
     const three_projects = Array.from(HTMLCollection).filter((element,index) => index >= start && index <= end )
   document.getElementsByClassName('projects')[0]?.replaceChildren()
   three_projects.forEach((each_child) => {
        document.getElementsByClassName('projects')[0]?.prepend(each_child)
   });
 }
  
}