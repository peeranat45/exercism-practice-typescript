export function accumulate(list: Array<any>, accumulator: any): any {
  var output = []
  for (var item of list ) {
    output.push(accumulator(item))
  }
  return output
}