let idPokemon = document.querySelector(".id-pokemon");
let nomePokemon = document.querySelector(".nome-pokemon")
let fotoPokemon = document.querySelector(".foto-pokemon")
let descricaoPokemon = document.querySelector(".descricao-pokemon")

let inputPesquisar = document.querySelector(".pesquisar");
let btnPesquisar = document.querySelector(".btn");
let form = document.querySelector(".form");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
})

btnPesquisar.addEventListener("click", pesquisar);

function pesquisar() {
   buscarPokemon(inputPesquisar.value.toLowerCase())
}

async function buscarPokemon(nome) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)

    if(response.status === 200) {
        const dados = await response.json()
        idPokemon.innerHTML = dados.id
        nomePokemon.innerHTML = dados.name
        fotoPokemon.src = dados['sprites']['front_default']
        descricaoPokemon.innerHTML = pegarDescricao(nome)
    } else {
        alert("Pokemon não encontrado!")
        limparDados()
    }
}

function pegarDescricao(pokemon) {

    if(!descricoes[pokemon]) {
        return 'O pokemon escolhido não possui descrição!'
    }

    return descricoes[pokemon]
}

function limparDados() {
    idPokemon.innerHTML = ''
    nomePokemon.innerHTML = ''
    fotoPokemon.src = ''
    descricaoPokemon.innerHTML = ''
}

let descricoes = {
    'pikachu': 'O Pikachu é um pokemon elétrico e fofo',
    'charmander': 'É um pokemon de fogo',
    'ditto': 'É um pokemon estranho'
}

