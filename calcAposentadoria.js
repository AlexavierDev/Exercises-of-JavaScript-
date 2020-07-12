const nome = 'Alex'
const idade = 50
const sexo = 'M'
const contribuicao = 50

const calculoDeContribuicao = idade + contribuicao 

const HomemPodeAposentar = sexo === 'M' && calculoDeContribuicao >= 95 && contribuicao >= 35
const MulherPodeAposentar = sexo === 'F' && calculoDeContribuicao >= 85 && contribuicao >= 30

if(HomemPodeAposentar || MulherPodeAposentar){
    console.log (`${nome} Voce pode se aposentar seu tempo de contribuiçao é de ${calculoDeContribuicao} anos`)
}else{
    console.log(`${nome} Voce ainda nao pode se aposentar seu tempo de de contrtibição é de ${calculoDeContribuicao} anos`)
}