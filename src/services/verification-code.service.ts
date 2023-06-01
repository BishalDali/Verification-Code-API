import { IVerificationCode } from "../utils";

export const isCodeValid = (codeDetails: IVerificationCode): boolean => {
  const { code } = codeDetails;
  return code.length !== 6 || code[5] === "7";
};
