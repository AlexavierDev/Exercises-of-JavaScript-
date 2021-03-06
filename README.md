# Exercises-of-JavaScript-
Exercises of JavaScript Finilazed for train the language


### Cálculo de IMC

Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o `nome`, `peso`, `altura` e `sexo` de uma pessoa, por exemplo:

```js
const nome = "Carlos";
const peso = 84;
const altura = 1.88;
```

A partir desses dados armazene em uma constante chamada `imc` o cálculo do índice de massa corporal definido pela fórmula abaixo:

```js
peso / (altura * altura);
```

Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

- `SE` o `IMC` maior ou igual a `30`: Carlos você está acima do peso;
- `SE` o `IMC` menor que `29.9`: Carlos você não está acima do peso;

### Cálculo de aposentadoria

Crie um programa para calcular a aposentadoria de uma pessoa.

_Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)_

Comece criando constantes para armazenar `nome`, `sexo`, `idade` e `contribuicao`(em anos), por exemplo:

```js
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
```

Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.

- O tempo de contribuição mínimo para **homens** é de **35 anos** e, para **mulheres**, **30 anos**;
- Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do **homem** precisa ser de no mínimo 95 anos, enquanto a **mulher** precisa ter no mínimo 85 anos na soma;

Com base nas regras acima imprima na tela as mensagens:

- `SE` a pessoa estiver aposentada: `Silvana, você pode se aposentar!`;
- `SE` a pessoa NÃO estiver aposentada: `Silvana, você ainda não pode se aposentar!`;




- **Objetos**;
- **Vetores**.

### Construção e impressão de objetos

Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado `empresa`. Os dados a serem armazenados são:

- Nome: Rocketseat
- Cor: Roxo
- Foco: Programação
- Endereço:

  - Rua: Rua Guilherme Gembala
  - Número: 260

_Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:_

```js
const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
```

Imprima em tela utilizando `console.log` o nome da empresa e seu endereço no seguinte formato:

```
A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
```

_Obs. Para imprimir em tela utilize o formato de template strings, por exemplo_

```js
console.log(`O nome do usuário é ${usuario.nome}`);
```

### Vetores e objetos

Crie um programa com um objeto para armazenar dados de um programador como `nome`, `idade` e `tecnologias` que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo `nome` e `especialidade`, use as tecnologias abaixo:

```js
{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
```

Por exemplo:

```js
const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
```

Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

```
O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

```
## Funções e estruturas de repetição
## Usuários e tecnologias

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias` (novo array), por exemplo:

```js
const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
```

Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

```
Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js
```

## Busca por tecnologia

Baseado no desafio anterior, utilize a mesma lista de usuários construída.

Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean `true/false`.

Por exemplo:

```js
function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}
```

Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:

```js
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i])
  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`)
  }
}
```

Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio `[]` e o saldo (balance) em `0` (zero).

```js
const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};
```

### Adicionar transações

Crie uma função `createTransaction` para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação que tem o seguinte formato:

```js
{
  type: 'credit',
  value: 50.5
}
```

O `type` pode ser `credit` para créditos e `debit` para débitos da conta do usuário.

Quanto uma transação for do tipo `credit` ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo `debit` ela deve subtrair o valor do débito no saldo (balance) do usuário.

_Dica.: Você pode usar o método `user.transactions.push(transaction)` para adicionar um novo item no array de transações.

