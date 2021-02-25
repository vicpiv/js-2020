// a este variabila globala
var a = 10
function multiply2(a) {
    //a este variabila locala
    a = a * 2
    console.log(a)
}
function multiply3(b) {
    // a este variabila globala 
    a = a * 3
    console.log(a)
}
function multiply4(x) {
    // a este variabila locala(let creaza o variabila locala)
    let a = 50
    a = a * 4
    console.log(a)
}

// aplica functia pentru valoarea din paranteza
multiply2(10)
multiply3(5)
multiply4(5)

console.log(a)