"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URL = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 3001;
exports.MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/BooksDB";
