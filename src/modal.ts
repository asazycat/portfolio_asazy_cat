
import { db } from "./db"

export  async function getMainModal() {
   
    return (await db).execute(`
        SELECT * FROM Experience;
        `).then((res: any) => res).catch((err: any) => err)
}
export  async function getSkillsModal() {
   
    return (await db).execute(`
        SELECT * FROM Skills;
        `).then((res: any) => res).catch((err: any) => err)
}


export  async function getProjectModal() {
      return (await db).execute(`
        SELECT * FROM Technologies;
        `).then((res: any) => res).catch((err: any) => err)
    
}

export  async function getProjectModal2() {
      return (await db).execute(`
        SELECT 
          p.*,
        GROUP_CONCAT(pt.tech_item_name ORDER BY pt.tech_item_name SEPARATOR ', ') AS technologies
          FROM Projects p
        LEFT JOIN Project_Tech_list pt
          ON p.project_id = pt.project_id
        GROUP BY p.project_id, p.project_name;
      `).then((res: any) => res).catch((err: any) => err)
    
}

export async function getSkillsQualificationsModal1() {
      return (await db).execute(`
        SELECT
            q.*,
            GROUP_CONCAT(t.topic_name ORDER BY t.topic_name SEPARATOR ', ') AS topics
        FROM Qualifications q
        LEFT JOIN Topics t
              ON q.qual_id = t.qual_id
        GROUP BY q.qual_id;
      `).then((res: any) => res).catch((err: any) => err)
    
}