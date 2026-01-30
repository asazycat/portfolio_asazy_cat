"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_handlebars_1 = require("express-handlebars");
const helpers_1 = require("./helpers");
dotenv_1.default.config();
const port = process.env.MYSQLPORT || 5000;
const hbs = (0, express_handlebars_1.create)({
    layoutsDir: __dirname + '/templates/layouts',
    extname: 'hbs',
    helpers: {
        TechType: helpers_1.TechType
    }
});
const expressApp = (0, express_1.default)();
expressApp.use(express_1.default.json());
expressApp.use((0, cors_1.default)());
expressApp.use('/', routes_1.default);
expressApp.set('views', 'templates');
expressApp.set('view engine', 'hbs');
expressApp.engine('hbs', hbs.engine);
expressApp.use(express_1.default.static("static"));
expressApp.listen(port, () => console.log(`Listening to server at http://localhost:${port}`));
//# sourceMappingURL=server.js.map