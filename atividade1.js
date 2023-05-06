const listaEx = [11,26,34,48,51,60,72,84,91,105]
let maior = listaEx[0]
let menor = listaEx[0]
for(i=0; i < listaEx.length; i++){
    if(listaEx[i] >= maior){
        maior = listaEx[i]
    }
    if(listaEx[i] <= menor){
        menor = listaEx[i]
    }
} for(let i =0; i < listaEx.length; i++){
    console.log(listaEx[i])
}
console.log("Menor numero:")
console.log(menor)
console.log("Maior numero:")
console.log(maior)

/********CORREÇÃO********
  listaEx.forEach(function(valor){
    if(valor > maior){
        maior = valor
    }
    if(valor < menor){
        menor = valor
    }
})

console.log(`O maior valor é ${maior} e o menor é ${menor}`)

AJUDA PARA EXERCICIO 2
usar prompt sync
não esquecer type module

*/