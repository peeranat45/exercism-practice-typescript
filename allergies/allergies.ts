export class Allergies {
  score: number;
  allergrics: any = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128

  }
  constructor(allergenIndex: number) {
    this.score = allergenIndex % 256
  }

  public list(): unknown {
    var allgericCount: Number = 0
    var output: string[] = []
    for (var item of Object.keys(this.allergrics).reverse()){
      if (this.allergrics[`${item}`] > this.score){
        continue
      }

      if (allgericCount + this.allergrics[`${item}`] > this.score ) {
        continue
      }else{
        allgericCount += this.allergrics[`${item}`]
        output.push(item)
      }
      


    }
    return output.reverse()
  }

  public allergicTo(allergen: string): boolean {
    if (this.allergrics[`${allergen}`] <= this.score ){
      return true
    }
    return false
  }
}
