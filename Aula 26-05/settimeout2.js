function ola(){
    console.log("ola")
}
function tchau(){
    console.log("tchau")
}
function discussao(){
    console.log("animos alterados")
}

function conversao(){
    console.log("conversa muito longa") 
}

function testeSetTimeout(callback , time){
    setTimeout(callback, time)

}

function conversa(){
    console.log("como vai?")
}


ola()
testeSetTimeout(conversa , 10000)
testeSetTimeout(discussao , 7000)
testeSetTimeout(conversao , 3000)
tchau()

