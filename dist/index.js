"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const post_router_1 = __importDefault(require("./routes/post.router"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
app.get('/ping', (req, res) => {
    res.json({ message: "hey" }).status(200);
});
app.use('/users', users_router_1.default);
app.use('/posts', post_router_1.default);
app.listen(port, () => {
    console.log(`server up and runnning on port ${port}`);
});
