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