import { renderContact, renderMain, renderSkills, renderProject, renderSkillsQualifications } from "./views";
import { getMainModal, getSkillsModal, getProjectModal, getProjectModal2, getSkillsQualificationsModal1 } from "./modal";
import { Request, Response } from "express";

export  async function getmainController(req: Request,res: Response) {
    const data1 =  await getMainModal()
    const data2 =  await getSkillsModal()
    const data = [data1, data2]
    renderMain(data,res)

}

export  async function getSkillsController(req: Request,res: Response) {
    const data =  await getSkillsModal()
    renderSkills(data,res)

}

export async function getProjectController(req: Request, res: Response) {
    const data_item1 =  await getProjectModal()
    const data_item2 = await getProjectModal2();
    const data = [data_item1, data_item2]
    renderProject(data,res)
}


export async function getSkillsQualificationsController(req: Request,res: Response) {
    const data = await getSkillsQualificationsModal1()
    renderSkillsQualifications(data,res)

}


export async function getContactController(req: Request, res: Response) {
    const data = await getMainModal()
    renderContact(data,res)
}