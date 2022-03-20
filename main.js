// funciones del index
function comprobation(u, p, message ){
    
    if(u === "admin" && p === "admin"){
        window.location = "search_ficha_tecnica.html"
    }
    else{
        message.innerText = "El usuario o la contraseña no son correctos"
    }
}

function next(){
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    let message = document.getElementById("message")

    let u = user.value
    let p = password.value

    let funciona = comprobation(u, p, message)
}

//funciones del search_ficha_tecnica

function desplegar_menu(){

    var nav = document.getElementById("search--ficha--nav")
    var opaco = document.getElementById("search--ficha--color-opaco")
    var menu = window.getComputedStyle(nav).display

    if(menu === 'none'){
        nav.style.display = "block"
        opaco.style = "block"
    }

    else{
        nav.style.display = "none"
        opaco.style.display = "none"
    }
}

function desplegar_qr(){

    var div_qr = document.getElementById("search--ficha--slider--i--div")
    var i_qr = document.getElementById("search--ficha--slider--i")
    var div_qr_display = window.getComputedStyle(div_qr).display

    if(div_qr_display === "none"){
        div_qr.style.display = "block"
        i_qr.style.display = "none"
    }
}

function cerrar(){
    
    var div_qr = document.getElementById("search--ficha--slider--i--div")
    var i_qr = document.getElementById("search--ficha--slider--i")
    div_qr.style.display = "none"
    i_qr.style.display = "block"
    
}


