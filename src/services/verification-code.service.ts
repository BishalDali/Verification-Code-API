import { IVerificationCode } from "../utils";


export const verifyCodeService = (codeDetails : IVerificationCode) : true | string =>{
    try {
        const {code} = codeDetails
        if(code.length !== 6 || code[5] === '7'){
            throw new Error('Invalid code')
        }
        return true
        
    } catch (error : unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
          }
        throw new Error('Unknown Error Occured')
    }
}