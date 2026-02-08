
import {Response } from "express";


export function renderMain(data: any, res: Response) {
    const [data1, data2] = data
    res.render('main', {layout: 'index', experience: data1[0], skills_list: data2[0]})
}

export function renderSkills (data: any, res: Response) {
   res.render('main', {layout: 'index', skills_list: data[0]})
}

export function renderProject (data: any, res: Response) {
   const [data1, data2] = data
   res.render('project', {layout: 'index', tech_list: data1[0], project_list: data2[0]})
}


export function renderSkillsQualifications(data: any, res: Response) {
    res.render('skillsQualifications', {layout: 'index', qualifications: data[0]})
}


export function renderContact (data: any, res: Response) {
    res.render('contact', {layout: 'index'})
}