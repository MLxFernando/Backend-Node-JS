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
exports.connectToMongoDB = void 0;
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
const connectToMongoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(config_1.MONGODB_URL);
    }
    catch (error) {
        console.error(error);
    }
});
exports.connectToMongoDB = connectToMongoDB;
mongoose_1.connection.on("connected", () => {
    console.log("DATABASE STARTED ", mongoose_1.connection.db.databaseName);
});
mongoose_1.connection.on("error", (error) => {
    console.error("error", error);
});
mongoose_1.connection.off("disconnected", () => {
    console.log("DATABASE STOP");
});
