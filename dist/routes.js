"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    (0, controller_1.getmainController)(req, res);
});
router.get('/project', (req, res) => {
    (0, controller_1.getProjectController)(req, res);
});
router.get('/skillsQualifications', (req, res) => {
    (0, controller_1.getSkillsQualificationsController)(req, res);
});
router.get('/contact', (req, res) => {
    (0, controller_1.getContactController)(req, res);
});
exports.default = router;
//# sourceMappingURL=routes.js.map