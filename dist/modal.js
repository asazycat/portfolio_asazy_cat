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
exports.getMainModal = getMainModal;
exports.getProjectModal = getProjectModal;
exports.getProjectModal2 = getProjectModal2;
exports.getSkillsQualificationsModal1 = getSkillsQualificationsModal1;
const db_1 = require("./db");
function getMainModal() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield db_1.db).execute(`
        SELECT * FROM Experience;
        `).then((res) => res).catch((err) => err);
    });
}
function getProjectModal() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield db_1.db).execute(`
        SELECT * FROM Technologies;
        `).then((res) => res).catch((err) => err);
    });
}
function getProjectModal2() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield db_1.db).execute(`
        SELECT 
          p.*,
        GROUP_CONCAT(pt.tech_item_name ORDER BY pt.tech_item_name SEPARATOR ', ') AS technologies
          FROM Projects p
        LEFT JOIN Project_Tech_list pt
          ON p.project_id = pt.project_id
        GROUP BY p.project_id, p.project_name;
      `).then((res) => res).catch((err) => err);
    });
}
function getSkillsQualificationsModal1() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield db_1.db).execute(`
        SELECT
            q.*,
            GROUP_CONCAT(t.topic_name ORDER BY t.topic_name SEPARATOR ', ') AS topics
        FROM Qualifications q
        LEFT JOIN Topics t
              ON q.qual_id = t.qual_id
        GROUP BY q.qual_id;
      `).then((res) => res).catch((err) => err);
    });
}
//# sourceMappingURL=modal.js.map