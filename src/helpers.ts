export function TechType(filter: string, obj: {
    tech_id: number, 
    tech_name: string, 
    img_small: string, 
    img_big: string, 
    library_or_framework: number, 
    front_end: number
    }) {
    if (filter === 'programmingLanguages' && (obj.front_end === null && obj.library_or_framework === 0)) {
      return `
      <div class="eachTech">
                    <img src=${obj.img_small} alt=${obj.tech_name} class="techImg"/>
                </div>
      `
    } else if (filter === 'webDevelopment' && ((obj.front_end === 1 && obj.library_or_framework === 1) || (obj.front_end === 0 && obj.library_or_framework === 1))) {
        return `
      <div class="eachTech">
                    <img src=${obj.img_small} alt=${obj.tech_name} class="techImg"/>
                </div>
      `
    } else if (filter === 'engineering') {
        //For future development with later projects in Python, C++ and Java - among other engineering software//
    }
}


export function TopicArr (para: any) {
   return para.split(', ').map((eachTop: string) => `<li class='eachTopic'>${eachTop}</li>`)
}

export  function TimeDateFix(date:string) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const new_date = new Date(date)
    return `${months[new_date.getMonth() + 1]} ${new_date.getFullYear()} `
}