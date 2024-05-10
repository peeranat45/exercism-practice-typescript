export function encode(plainText: string):any {
  let formatInput = plainText.toLowerCase().match(/[a-z]|[A-Z]|\d*/g)?.join("")
  let output = ""
  const encodedChar = (input: string) => {
    let formatInput : number = input.charCodeAt(0) - 'a'.charCodeAt(0) + 1
    let different: number =  25 - 2 * (formatInput - 1)
    let outputAscii: number = formatInput + different
    return String.fromCharCode(outputAscii + 'a'.charCodeAt(0)-1)
  }
  console.log(`formatInput = ${formatInput}`)
  for(let i = 0; i < formatInput.length; i++) {
    if (formatInput[i] >= 'a' &&  formatInput[i] <= 'z') {
      output += encodedChar(formatInput[i])
    }else{
      output += formatInput[i]
    }
    
    if ((i + 1) % 5 === 0 && i < formatInput?.length - 1) {
      output += " "
    }
  }
  return output
}

export function decode(cipherText: string): unknown {
  return encode(cipherText).split(" ").join("")

}
