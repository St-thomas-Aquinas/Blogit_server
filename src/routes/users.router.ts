import { Router } from "express";

import { getAllUsers } from "../controllers/users.controller";
import { createUser } from "../controllers/users.controller";
import { getSingleUser } from "../controllers/users.controller";
import { updateUser } from "../controllers/users.controller";

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:UserName', getSingleUser)
userRouter.post('/',createUser)
userRouter.put('/:id',updateUser)
export default userRouter