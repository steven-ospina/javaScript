//Varibales
const email = document.getElementById('email');
const asusnto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


//EvenListener
evenListener(); 

function evenListener(){
    //inicio de la aplicacion y deshabilitar el submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asusnto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Boton de enviar en el submit
    formularioEnviar.addEventListener('submit',enviarEmail);

    //boton de reset
    resetBtn.addEventListener('click', resetFormulario);
}



//Funciones
function inicioApp(){
    //Desabilitar el envio
    btEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){
    //se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar unicamente el email
    //console.log(this.type);
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asusnto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btEnviar.disabled = false;  
        }
        
    }

    //console.log('dentro del input');
}

//Resetear el formulario
function resetFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();   
}

//Cuando se envia el correo
function enviarEmail(e){
    e.preventDefault();
    //Spinner al presionar Enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar Spinner y mostrar gif de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';

        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        }, 5000)
    }, 3000)

    //console.log('Email enviado');
}

//Verifica la longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
    //console.log(campo.value.length);
    //console.log(campo)
}

 
function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}