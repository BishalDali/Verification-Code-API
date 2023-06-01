import {Response, Request} from 'express'
import { verifyCodeService } from '../services/verification-code.service'
import { VerificationCodeDTO } from '../dto/verification-code.dto'

export const verifyCode = (req: Request, res : Response) => {
    const {code} : VerificationCodeDTO = req.body
    try {
        const isVerified = verifyCodeService({code})
        if(isVerified){
            res.status(200).json({
                message : "Verification Successful"
            })
        }
        
    } catch (error) {
        res.status(400).json({
            message: "Invalid Code"
        })
    }
}