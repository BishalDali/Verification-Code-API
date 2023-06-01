import { IVerificationCode } from "../utils";

export const isCodeValid = (codeDetails: IVerificationCode): boolean => {
  const { code } = codeDetails;
  console.log(code);
  return (code.length === 6 && code[5] !== "7")
   

};
