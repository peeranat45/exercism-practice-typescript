function parse(phrase: string): any {
    var splitString: string[] = phrase.split(/-| /)
    var output : string = ""
    for(var item of splitString) {
        var checkUpper:boolean = false
        // item = item.toUpperCase()
        for(let i = 0; i < item.length-1;i++){
          if((item[i+1] >= 'a' && item[i+1] <= 'z')  && (item[i] >= 'A' && item[i] <= 'Z')) {
            console.log("item[i] " + item[i] + "\n")
            output += item[i]
            checkUpper = true
          }
            
        }
        if (!checkUpper) {
          output += item[0].toUpperCase()
        }
    }
    return output
  }

  console.log(parse("Complementary metal-oxide semiconductor"))