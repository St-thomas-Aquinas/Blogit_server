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
exports.createPost = exports.getpostbyid = exports.getAllPost = void 0;
const client_1 = require("@prisma/client");
const userclient = new client_1.PrismaClient().post;
//get all user
const getAllPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allpost = yield userclient.findMany();
        res.status(200).json({ data: allpost });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.getAllPost = getAllPost;
const getpostbyid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Name = req.params;
        console.log(JSON.parse(JSON.stringify(Name.authorId)));
        const user = yield userclient.findMany({
            where: {
                authorId: (JSON.parse(Name.authorId))
            },
        });
        res.status(200).json({ data: user });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.getpostbyid = getpostbyid;
//Creat users
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Postdata = req.body;
        const Newpost = yield userclient.create({
            data: Postdata
        });
        res.status(201).json({ data: Newpost });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong post' });
    }
});
exports.createPost = createPost;
