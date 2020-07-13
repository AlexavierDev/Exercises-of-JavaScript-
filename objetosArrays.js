/*
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco:'Programaçao',
    endereço : {
        Rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} esta localizada no endereço ${empresa.endereço.Rua}, ${empresa.endereço.numero}`)
*/

const programador = {
    nome: 'Alex',
    idade: 21,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}


console.log(`O programador ${programador.nome} tem a idade de ${programador.idade}
            e atua com a tecnologia ${programador.tecnologias[0].nome} com a especialidade em 
            ${programador.tecnologias[0].especialidade}`)