const nav = document.querySelectorAll("header nav a")

function adicionalinha(item, index){
    if(window.location.href.includes(item.href)){
        console.log(item.href)
        nav[index].classList.toggle("ativo")
    }
}

nav.forEach(adicionalinha)