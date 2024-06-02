export default function generatePass() {
  let password: string = "";
  let characters: string =
    "<Aa@$#%¨1&2345*(678)90bc-defg_hi=FHG+IJK{LMN[{O>P!}]QY,qazwsexcdrftvbgyhnuijmko,lp.ç´;QAZWSXEDCRFTVGYBHNUJIMKO,LP.~W.^U;/ZX:";
  let passWordlength: number = 12;

  for (let index = 0; index < passWordlength; index++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return password;
}
