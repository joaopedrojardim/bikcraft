//ativar links no menu
const nav = document.querySelectorAll("header nav a")

function adicionalinha(item, index){
    if(window.location.href.includes(item.href)){
        console.log(item.href)
        nav[index].classList.toggle("ativo")
    }
}

nav.forEach(adicionalinha)

// ativar itens do orçamento
const parametros = new URLSearchParams(location.search) 

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true
    }
}
parametros.forEach(ativarProduto)

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
}

function ativarPergunta(event){
    
    const pergunta = event.currentTarget
    const controls = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(controls)

    
    resposta.classList.toggle("ativo")
    const ativo = resposta.classList.contains("ativo")
    pergunta.setAttribute('aria-expanded', ativo) 
}

perguntas.forEach(eventosPerguntas)

//Bicicleta interior galeria
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens ')

function eventosGaleria(img){
    img.addEventListener('click', trocarImg)
}

function trocarImg(event){
    const img = event.currentTarget;
    galeriaContainer.prepend(img)
}

galeria.forEach(eventosGaleria)
