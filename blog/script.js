//reloj bajo BLOG
var reloj = setInterval('comprobarHora()', 1001);

function comprobarHora() {
    var horaActual, hora, minutos, segundos;

    horaActual = new Date();

    hora = horaActual.getHours().toString();
    minutos = horaActual.getMinutes().toString();
    segundos = horaActual.getSeconds().toString();

    if (hora.length == 1) {
        hora = "0"+hora;
    }
    
    if (minutos.length == 1) {
        minutos = "0"+minutos;
    }
    
    if (segundos.length == 1) {
        segundos = "0"+segundos;
    }

    // DOM 
    document.forms[0].relojDigital.value = hora +" : "+minutos+" : "+segundos;
}

//contenedor saliendo 
const cajas = document.querySelectorAll('.caja')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom =window.innerHeight / 5 * 4

    cajas.forEach(caja => {
        const cajaTop = caja.getBoundingClientRect().top

        if (cajaTop < triggerBottom) {
            caja.classList.add('show')
        } else {
            caja.classList.remove('show')           
        }
    })
}

// Letras ZODIACO
const textEl = document.getElementById('inicio')
const speedEl = document.getElementById('speed')
const text = 'ZODIACO'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)