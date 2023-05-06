const podeDirigir = null
const podeBeber = false

const texto = (podeDirigir == true) ? "Pode Dirigir" : "Não pode"
console.log(texto)

if(podeDirigir && podeBeber){
    console.log(``)
}

if(podeBeber || podeBeber){
    console.log(``)
}

const check = (podeDirigir === true)
console.log(check)
/*let texto = ""
if(podeDirigir == true){
    texto = "Pode dirigir"
}else {
    texto = "Não pode"
}*/

const lista = [1,3,7,9]
console.log(lista[3])

lista[3] = 100
console.log(lista)
lista.push(15)
console.log(lista)
lista.pop()
console.log(lista)

console.log(lista.length)

for(let i =0; i < lista.length; i++){
    console.log(lista[i])
}

function somar(a,b){
    return (a+b > 20) ? "A" : "B"
}

const val = somar(10,20)

const abc = function(a){
    return a*10
}

const print = console.log

lista.forEach(function(valor){
    imprimir(valor) 
})

lista.forEach(valor => imprimir(valor))

const func = [imprimir,somar]

function imprimir(valor){
    console.log(valor)
}

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

console.log(matriz[1][2])

matriz.forEach(linha =>{
    linha.forEach(valor => console.log(valor))
})

