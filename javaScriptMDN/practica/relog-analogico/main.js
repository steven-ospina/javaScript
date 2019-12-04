function relog() {
    const getTime = new Date();
    //crea las variables del relog
    const relogDigital = {
        horaDigital: getTime.getHours(),
        minutosDigitla: getTime.getMinutes(),
        segundosDigital: getTime.getSeconds()
    }
    //crea el relog y lo inserta en el DOM
    const time = `${relogDigital.horaDigital}:${relogDigital.minutosDigitla}:${relogDigital.segundosDigital}`;
    document.querySelector(".relogDigital").innerHTML = time;
    document.title = `Reloges:${time}`;
}

function horas() {
    //obtiene la hora 
    const getTime = new Date();
    const hora = {
        hour: getTime.getHours()
    }
    //compara la hora y le resta 12 para poder mostrar la hora exacta en el DOM
    if (hora.hour >= 12) {
        hora.hour - 12
    }
    //calculo para poder rotar la hora en el DOM
    const hours = (hora.hour / 12 * 360);
    const horasDom = document.querySelector(".horas");
    horasDom.style.transform = `rotate(${hours}deg)`;
}

function minutos() {
    //Obtiene los minutos
    const getTime = new Date();
    const minutos = getTime.getMinutes();
    //Calculo para poder rotar los minutis en el DOM
    const minutes = (minutos / 60 * 360);
    const minutosDom = document.querySelector(".minutos")
    minutosDom.style.transform = `rotate(${minutes}deg)`;
}

function segundos() {
    //Obtiene los segundos
    const getTime = new Date();
    const segundos = getTime.getSeconds();
    //Calculo para poder rotar los segundos en el DOM
    let seconds = (segundos / 60 * 360);
    const segundosDom = document.querySelector(".segundos");
    segundosDom.style.transform = `rotate(${seconds}deg)`;
}

/*
Para que el relog-digital y el relog-analogico puedan
funcionar en el DOM. 
*/
setInterval(() => {
    relog();
    horas();
    minutos();
    segundos();
}, 1000);