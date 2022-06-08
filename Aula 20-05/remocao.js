var carnes = ["costela" , "alcatra" , "maminha"]
console.log(carnes.toString())

delete carnes[2]
console.log(carnes.toString())

carnes.push("mortadela")
console.log(carnes.toString())

carnes[2] = "maminha"
console.log(carnes.toString())

carnes.splice(2,1)
console.log(carnes.toString())

carnes.splice(1, 0 , "linguicinha" , "pao de alho")
console.log(carnes.toString())
 


