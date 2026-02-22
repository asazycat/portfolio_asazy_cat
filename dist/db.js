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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
let attempts = 0;
const MAX_ATTEMPTS = 10;
const BASE_DELAY_MS = 2000; // 2 seconds
const dbCon = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    return promise_1.default.createConnection({
        host: (_a = process.env.MYSQLHOST) !== null && _a !== void 0 ? _a : 'localhost',
        user: (_b = process.env.MYSQLUSER) !== null && _b !== void 0 ? _b : 'root',
        password: (_c = process.env.MYSQLPASSWORD) !== null && _c !== void 0 ? _c : 'kiloloki',
        database: (_d = process.env.MYSQLDATABASE) !== null && _d !== void 0 ? _d : 'portfolio'
    });
});
const connectWithRetry = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield dbCon();
        console.log('✅ Connected to MySQL');
        return connection;
    }
    catch (err) {
        attempts++;
        if (attempts >= MAX_ATTEMPTS) {
            console.error('❌ Failed to connect to MySQL after max retries');
            throw err;
        }
        const delay = BASE_DELAY_MS * attempts;
        console.warn(`⏳ MySQL not ready. Retrying in ${delay / 1000}s... (${attempts}/${MAX_ATTEMPTS})`);
        yield new Promise((resolve) => setTimeout(resolve, delay));
        return connectWithRetry();
    }
});
exports.db = connectWithRetry();
//# sourceMappingURL=db.js.map