"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const express_handlebars_1 = require("express-handlebars");
const port = 5000;
const expressApp = (0, express_1.default)();
expressApp.use(express_1.default.json());
expressApp.use((0, cors_1.default)());
expressApp.use('/', routes_1.default);
expressApp.set('views', 'templates');
expressApp.set('view engine', 'hbs');
expressApp.engine('hbs', (0, express_handlebars_1.engine)({
    layoutsDir: __dirname + '/templates/layouts',
    extname: 'hbs'
}));
expressApp.use(express_1.default.static("static"));
expressApp.listen(port, () => console.log(`Listening to server at http://localhost:${port}`));
//# sourceMappingURL=server.js.map