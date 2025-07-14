import { Router } from "express";

import { getAllPost } from "../controllers/post.controller";
import { createPost } from "../controllers/post.controller";
import { getpostbyid } from "../controllers/post.controller";
const userRouter = Router()

userRouter.get('/', getAllPost)
userRouter.get('/:authorId', getpostbyid)
userRouter.post('/',createPost)
export default userRouter