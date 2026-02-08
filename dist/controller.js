"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getmainController = getmainController;
exports.getSkillsController = getSkillsController;
exports.getProjectController = getProjectController;
exports.getSkillsQualificationsController = getSkillsQualificationsController;
exports.getContactController = getContactController;
const views_1 = require("./views");
const modal_1 = require("./modal");
function getmainController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data1 = yield (0, modal_1.getMainModal)();
        const data2 = yield (0, modal_1.getSkillsModal)();
        const data = [data1, data2];
        (0, views_1.renderMain)(data, res);
    });
}
function getSkillsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, modal_1.getSkillsModal)();
        (0, views_1.renderSkills)(data, res);
    });
}
function getProjectController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data_item1 = yield (0, modal_1.getProjectModal)();
        const data_item2 = yield (0, modal_1.getProjectModal2)();
        const data = [data_item1, data_item2];
        (0, views_1.renderProject)(data, res);
    });
}
function getSkillsQualificationsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, modal_1.getSkillsQualificationsModal1)();
        (0, views_1.renderSkillsQualifications)(data, res);
    });
}
function getContactController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield (0, modal_1.getMainModal)();
        (0, views_1.renderContact)(data, res);
    });
}
//# sourceMappingURL=controller.js.map