function getArray<T>(items: T[]): T[]{
    return new Array<T>().concat(items)
}

let myNumberArr = getArray<number>([100, 200, 300])
let myStringArr = getArray<string>(["hello" , "world"])

myNumberArr.push(550)
myStringArr.push("teste")

console.log(myNumberArr)
console.log(myStringArr)