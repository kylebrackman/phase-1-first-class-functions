function receivesAFunction(sayHello){
    sayHello()
}
function sayHello() {
    return "hello!"
}
function returnsANamedFunction(){
    return sayHello;
}
function sayHello(name) {
    return `hello ${name}`
}

function returnsAnAnonymousFunction () {
    return function(){
        return (`That was frustrating!`)
    }
}