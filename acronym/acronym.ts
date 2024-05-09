export function parse(phrase: string): string {
  var splitString: string[] = phrase.split(/-| /)
    var output : string = ""
    for(var item of splitString) {
        var isPascal:boolean = false
        // Split Pascal word
        // HyperText Markup Language -> HTML
        for(let i = 0; i < item.length-1;i++){
          if((item[i+1] >= 'a' && item[i+1] <= 'z')  && (item[i] >= 'A' && item[i] <= 'Z')){
            output += item[i]
            isPascal = true
          }
        }
        // 
        if (!isPascal) {
          output += item[0].toUpperCase()
        }
  
    }
    return output
}
