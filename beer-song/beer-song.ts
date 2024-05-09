export function verse(index: number): string {
  if (index > 2) {
    return `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index - 1} bottles of beer on the wall.\n`
  }else if(index === 2){
    return  `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index - 1} bottle of beer on the wall.\n`
  }else if(index === 1){
    return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`
  }else{
    return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`
  }
}

export function sing(
  initialBottlesCount: number = 99,
  takeDownCount: number = 0
): string {
  let output: string = ""
  for(let i = initialBottlesCount; i >= takeDownCount;i--) {
    output += verse(i)
    if (i != takeDownCount) output += "\n"
  }
  return output
}
