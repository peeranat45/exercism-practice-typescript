var allergrics: any = {
    "eggs": 1,
    "peanuts": 2,
    "shellfish": 4,
    "strawberries": 8,
    "tomatoes": 16,
    "chocolate": 32,
    "pollen": 64,
    "cats": 128
}
for(var item of Object.keys(allergrics).reverse()){
    console.log(item)
}

