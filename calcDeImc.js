const nome = 'Alex'
const peso = 100
const altura = 1.70

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} Voce esta acima do peso`)
} else {
    console.log(`${nome} Voce esta no peso ideal`)
} 
