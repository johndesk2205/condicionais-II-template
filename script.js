// const idadeDependente = prompt('Idade da pessoa dependente')

// if (idadeDependente >= 13) {
//     if (idadeDependente <= 17) {
//         console.log("A pessoa dependente poder ter o cartão vinculado")
//     } else {
//         console.log("A pessoa dependente tem idade maior que 17 anos")
//     }
// } else {
//     console.log("A pessoa dependente tem menos de 13 anos e ainda não pode ter cartão")
// }

//Utlizando operadores
// if (idadeDependente >= 13 && idadeDependente <= 17){
//     console.log("A pessoa dependente pode ter um cartão vinculado ao seu")
// } else {
//     console.log("Consulte outras possibilidades do Labank")
// }

//Utilizando if ternário
// const resposta = prompt("Você já possui conta no Labank?")

// resposta.toLowerCase() === 'sim' ? 
//  console.log("Boas vindas!") :
//  console.log("Abra a sua conta")

//Usando switch

//const respostaTelefone = Number(prompt('Escolha seu cartão:\n1 para "Fácil"\n2 para "Black"\n3 para "Platinum"\n4 para "Master Gold" '))

//  switch(respostaTelefone){
//     case 1:
//         console.log('Cartão Fácil')
//         break
//     case 2:
//         console.log("Cartão Black")
//         break
//     case 3:
//         console.log("Cartão Platinum")
//         break
//     case 4:
//         console.log("Cartão Master Gold")
//         break
//     default:
//         console.log("Escolha uma das opções disponíveis")
//  }

const num = Number(prompt("Digite um número"))

//Exercicio de Fixação
//a
if (num % 2 === 0) {
    if (num % 3 === 0) {
        console.log("O número é divisível por 2 e por 3")
    } else {
        console.log("O número não é divisível por 3")
    }
} else {
    console.log("O número não é divisível por 2")
}

//b
if (num % 2 === 0 && num % 3 === 0) {
    num === 30 ? 
    console.log("UFA, ACERTEI!") : 
    console.log("Não foi dessa vez :(") //Segunda parte do exercício, if ternário
    //Terceira parte do exercício
    switch(num){
        case 6:
            console.log(`O número que digitou foi ${num} e é divisível por 2 e por 3`)
            break
        case 12:
            console.log(`O número que digitou foi ${num} e é divisível por 2 e por 3`)
            break
        case 18:
            console.log(`O número que digitou foi ${num} e é divisível por 2 e por 3`)
            break
        case 24:
            console.log(`O número que digitou foi ${num} e é divisível por 2 e por 3`)
            break
        case 30:
            console.log(`O número que digitou foi ${num} e é divisível por 2 e por 3`)
            break
        default:
            console.log("O número é maior que 30 ou menor que 6")
    }
   // console.log("O número é divisível por 2 e por 3")
} else {
    console.log("O número não é divisível por 2 ou por 3")
}