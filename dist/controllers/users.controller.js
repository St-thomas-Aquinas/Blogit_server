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
exports.updateUser = exports.createUser = exports.getSingleUserpasscode = exports.getSingleUser = exports.getAllUsers = void 0;
const client_1 = require("../../generated/prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userclient = new client_1.PrismaClient().usertable;
//get all user
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allusers = yield userclient.findMany();
        res.status(200).json({ data: allusers });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.getAllUsers = getAllUsers;
///Getuserby ID
//get all user
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Name = req.params;
        console.log(JSON.parse(JSON.stringify(Name.UserName)));
        const user = yield userclient.findFirst({
            include: {
                posts: true
            },
            where: {
                UserName: JSON.parse(JSON.stringify(Name.UserName))
            },
        });
        //Creating jwt token
        const token = jsonwebtoken_1.default.sign({ user }, 'shhhhh');
        const resd = jsonwebtoken_1.default.verify(token, 'shhhhh');
        res.status(200).json({ data: resd });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.getSingleUser = getSingleUser;
//get all user
const getSingleUserpasscode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Name = req.params;
        console.log(JSON.parse(JSON.stringify(Name.Password)));
        const user = yield userclient.findFirst({
            include: {
                posts: true
            },
            where: {
                UserName: JSON.parse(JSON.stringify(Name.UserName))
            },
        });
        res.status(200).json({ data: user });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.getSingleUserpasscode = getSingleUserpasscode;
//Creat users
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersdata = req.body;
        const Newusers = yield userclient.create({
            data: usersdata
        });
        res.status(201).json({ data: Newusers });
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.createUser = createUser;
//get all user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("i have been hit");
    try {
        const Name = req.params;
        const update = req.body;
        console.log(Name[1]);
        console.log(JSON.parse(JSON.stringify(Name.id)));
        const user = yield userclient.updateMany({
            where: {
                UserName: JSON.parse(JSON.stringify(Name.id))
            },
            data: JSON.parse(JSON.stringify(update))
        });
        res.status(200).json(update);
    }
    catch (e) {
        res.status(200).json({ message: 'something went wrong' });
    }
});
exports.updateUser = updateUser;
