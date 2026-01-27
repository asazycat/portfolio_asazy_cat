"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMain = renderMain;
exports.renderProject = renderProject;
exports.renderSkillsQualifications = renderSkillsQualifications;
exports.renderContact = renderContact;
function renderMain(data, res) {
    res.render('main', { layout: 'index', experience: data[0] });
}
function renderProject(data, res) {
    const [data1, data2] = data;
    res.render('project', { layout: 'index', tech_list: data1[0], project_list: data2[0] });
}
function renderSkillsQualifications(data, res) {
    console.log(data[0]);
    res.render('skillsQualifications', { layout: 'index', qualifications: data[0] });
}
function renderContact(data, res) {
    res.render('contact', { layout: 'index' });
}
//# sourceMappingURL=views.js.map