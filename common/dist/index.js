"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const singupInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string(),
    name: zod_1.default.string().optional()
});
const siginInput = zod_1.default.object({
    username: zod_1.default.string().email(),
    password: zod_1.default.string()
});
const createPostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
});
const updatePostInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string().optional(),
});
