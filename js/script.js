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

