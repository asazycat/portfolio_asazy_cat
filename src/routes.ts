import { Request, Response,Router } from "express";
import { getContactController, getmainController, getProjectController, getSkillsController, getSkillsQualificationsController } from "./controller";

const router = Router()

router.get('/', (req: Request, res: Response) => {
    getmainController(req,res)
    
});


router.get('/project', (req: Request, res: Response) => {
    getProjectController(req,res)
})

router.get('/skillsQualifications', (req: Request, res: Response) => {
    getSkillsQualificationsController(req,res)
});


router.get('/contact', (req: Request, res: Response) => {
    getContactController(req,res)
})



export default router