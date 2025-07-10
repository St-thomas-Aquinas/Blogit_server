import { Router } from "express";

import { getAllUsers } from "../controllers/users.controller";
import { createUser } from "../controllers/users.controller";
const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/',createUser)
export default userRouter