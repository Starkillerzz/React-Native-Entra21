/**Arrow Function */
var x = function(){
    console.log("Função Anonima") //anonima
}
x()

var y = () => {
    console.log("Arrow function") //arrow

}
y()

var somar = (n1,n2) =>{
    var resultado = n1+n2
    console.log(resultado)
}
somar(10,20)