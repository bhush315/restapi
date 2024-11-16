import { Router } from "express"
import { createUsers, deleteUsers, findAllUsers, updateUsers } from "../controllers/userController.js"

const userRouter= Router()

  userRouter.get("/", findAllUsers)// to get all users in database
  userRouter.put("/:_id", updateUsers) //to update a post
  userRouter.delete("/:_id",deleteUsers)// to delet a partiular user
  userRouter.post("/", createUsers)








export default userRouter






