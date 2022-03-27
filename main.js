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
        opaco.style.display = "block"
    }

}

function desaparecer(){
    var div_opaco = document.getElementById("search--ficha--color-opaco")
    var nav = document.getElementById("search--ficha--nav")
    var opaco = window.getComputedStyle(div_opaco).display

    if(opaco === "block"){
        div_opaco.style.display = "none"
        nav.style.display = "none"
        
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

function desplegar_qr2(){

    var div_qr = document.getElementById("search--ficha--slider--i--div2")
    var i_qr = document.getElementById("search--ficha--slider--i2")
    var div_qr_display = window.getComputedStyle(div_qr).display

    if(div_qr_display === "none"){
        div_qr.style.display = "block"
        i_qr.style.display = "none"
    }
}

function cerrar2(){

    var div_qr = document.getElementById("search--ficha--slider--i--div2")
    var i_qr = document.getElementById("search--ficha--slider--i2")
    div_qr.style.display = "none"
    i_qr.style.display = "block"
    
}

function desplegar_qr3(){

    var div_qr = document.getElementById("search--ficha--slider--i--div3")
    var i_qr = document.getElementById("search--ficha--slider--i3")
    var div_qr_display = window.getComputedStyle(div_qr).display

    if(div_qr_display === "none"){
        div_qr.style.display = "block"
        i_qr.style.display = "none"
    }
}

function cerrar3(){

    var div_qr = document.getElementById("search--ficha--slider--i--div3")
    var i_qr = document.getElementById("search--ficha--slider--i3")
    div_qr.style.display = "none"
    i_qr.style.display = "block"
    
}
/*
const buttons_close = document.querySelectorAll(".search--ficha--close--i--qr")

const cambio_de_i = function(evento){
    const div_previous = this.parentElement
    const div_h3 = div_previous.nextElementSibling
    const div_i = div_h3.nextElementSibling
    div_previous.classList.toggle("search--ficha--slider--i--c")
    div_i.classList.replace("search--ficha--slider--i--c","prueba")
    console.log(div_i)
}

buttons_close.forEach(button_close => {
    button_close.addEventListener("click", cambio_de_i)
})
const buttons_qr = document.querySelectorAll(".search--ficha--slider--i")

const desplegar_qr = function(evento){
    const div_qr = this.previousElementSibling //h3
    const next = div_qr.previousElementSibling //div
    const close_i = next.firstElementChild
    next.classList.toggle("search--ficha--slider--i--div--b")
    this.classList.toggle("search--ficha--slider--i--c")
}

buttons_qr.forEach(button_qr => {
    button_qr.addEventListener("click", desplegar_qr)
})
*/
 //funciones new_maintenance

const buttons = document.querySelectorAll(".new--maintenance--btn--primary")

const cambio_de_color = function(evento){

    const circle = this.firstElementChild
    const check = this.lastElementChild

    this.classList.toggle("cambio")
    console.log(this)
    circle.classList.toggle("cambio--icon--circle")
    check.classList.toggle("cambio--icon--check")
}

buttons.forEach(button => {
    button.addEventListener("click", cambio_de_color)
})

const labels_inputs = document.querySelectorAll(".new--maintenance--label--input")

labels_inputs.forEach(label_input => {

    label_input.onblur = function(){
        const select = this.parentElement //selector
        const div = select.parentElement //div
        const button = div.nextElementSibling //button
        const main = div.parentElement //main
        const header = main.previousElementSibling
        if(window.innerWidth < 600){
            button.style.display = "block"
            header.style.display = "block"
        }
        
    }

    label_input.onfocus = function() {
        const select = this.parentElement //selector
        const div = select.parentElement //div
        const button = div.nextElementSibling //button
        const main = div.parentElement //main
        const header = main.previousElementSibling
        if(window.innerWidth < 600){
            button.style.display = "none"
            header.style.display = "none"
        }
    }
})

const desktops_as = document.querySelectorAll(".new--maintenance--desktop--a")

desktops_as.forEach(desktop_a => {
    desktop_a.onblur = function(){
        this.style.borderBottom = "none"
    }

    desktop_a.onfocus = function(){
        this.style.borderBottom = "2px solid #f5f3f4"
    }
})

/*Record*/

const buttons_pdf = document.querySelectorAll(".generate--pdf")

const generate_pdf = function(evento){
    const section_record = this.parentElement
    const object_pdf = section_record.nextElementSibling
    const section_detalle = object_pdf.nextElementSibling
    object_pdf.style.display = "block"
    //html2pdf()
    //.from(section_detalle)
    //.save()
}

buttons_pdf.forEach(button_pdf => {
    button_pdf.addEventListener("click", generate_pdf)
})