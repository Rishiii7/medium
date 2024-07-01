"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.siginInput = exports.singupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.singupInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string(),
    name: zod_1.default.string().optional()
});
exports.siginInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string()
});
exports.createPostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
exports.updatePostInput = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    content: zod_1.default.string().optional(),
});
