export function find(haystack: Array<number>, needle: number): number | Error
 {
    let start: number= 0
    let end: number = haystack.length
    let current: number
    if (needle > haystack[haystack.length-1] || needle < haystack[0] || haystack.length <= 0){
        return new Error('Value not in array')
    }
    while (end - start !== 1 && start < end)  {
        current = Math.floor((start + end) / 2)
        if (haystack[current] !== needle ){
            if (needle < haystack[current]) {
                end = current - 1
                console.log(`new end ${end}`)
            }else{
                start = current + 1
                console.log(`new start ${start}, current end ${end}`)

            }
        }else{
            return current
        }
    }
    if (needle === haystack[start]) {
        return start
    }else if (needle === haystack[end]){
        return end
    }
    return new Error('Value not in array')
}
