const usuarios = [
    { nome: 'Alex', tecnologias: ['HTML', 'CSS'] },
    { nome: 'Diego', tecnologias: ['JavaScript', 'SQL'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js','CSS'] }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} com ${usuario.tecnologias}`)
}



function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}