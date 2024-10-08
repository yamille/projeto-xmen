
//passo 1 -> pegar os personagens no JS pra alterar quando passar o mouse em cima

const personagens = document.querySelectorAll(".personagem")

//passo 2 -> adicionar a classe "selecionado" no personagem que o usuário passar o mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

//passo 3 -> verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado');
        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.setAttribute("src", `src/images/${idPersonagem}-grande.png`)
    
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    
    })

    
})