import { Response, Request } from "express";
import { isCodeValid } from "../services/verification-code.service";
import { VerificationCodeDTO } from "../dto/verification-code.dto";

export const verifyCode = (req: Request, res: Response) => {
  const { code }: VerificationCodeDTO = req.body;
  const isVerified = isCodeValid({ code });
  
 
  if (isVerified) {
    return res.status(200).json({
      message: "Verification Successful",
    });
  } else {
    return res.status(400).json({
      message: "Invalid Code",
    });
  }
};
