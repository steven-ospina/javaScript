function relog() {
    const getTime = new Date();
    let hora = getTime.getHours();
    const minutos = getTime.getMinutes();
    const segundos = getTime.getSeconds();
    const time = `${hora}:${minutos} ${segundos}`;
    const divs = document.querySelector(".hora").innerHTML = time;
    let seconds = (segundos / 60 * 360);
    const segundosDom = document.querySelector(".segundos");
    segundosDom.style.transform = `rotate(${seconds}deg)`;
    const minutes = (minutos / 60 * 360);
    const minutosDom = document.querySelector(".minutos")
    minutosDom.style.transform = `rotate(${minutes}deg)`;
    if(hora >= 12){
        hora - 12
    }
    const hours = (hora / 12 * 360);
    const horasDoms = document.querySelector(".horas");
    horasDoms.style.transform =  `rotate(${hours}deg)`;
    // console.log(hours);
}

setInterval(relog,1000);

