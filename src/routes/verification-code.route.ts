import { Router } from "express";
import { verifyCode } from "../controllers/verification-code.controller";
const verificationRouter = Router()

verificationRouter.post('/', verifyCode)


export default verificationRouter