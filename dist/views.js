"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMain = renderMain;
exports.renderSkills = renderSkills;
exports.renderProject = renderProject;
exports.renderSkillsQualifications = renderSkillsQualifications;
exports.renderContact = renderContact;
function renderMain(data, res) {
    const [data1, data2] = data;
    res.render('main', { layout: 'index', experience: data1[0], skills_list: data2[0] });
}
function renderSkills(data, res) {
    res.render('main', { layout: 'index', skills_list: data[0] });
}
function renderProject(data, res) {
    const [data1, data2] = data;
    res.render('project', { layout: 'index', tech_list: data1[0], project_list: data2[0] });
}
function renderSkillsQualifications(data, res) {
    res.render('skillsQualifications', { layout: 'index', qualifications: data[0] });
}
function renderContact(data, res) {
    res.render('contact', { layout: 'index' });
}
//# sourceMappingURL=views.js.map