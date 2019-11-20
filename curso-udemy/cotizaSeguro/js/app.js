//Cotizador Constructor
//Constructor para Seguro
class Seguro{
    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
    cotizarSeguro(){
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35 
        */
        let cantidad; 
        const base = 2000;
    
        switch(this.marca){
            case '1':
            cantidad = base * 1.15;
            break
            case '2':
            cantidad = base * 1.05;
            break
            case '3':
            cantidad  = base * 1.35
            break
        }
        //console.log(cantidad);
    
        //leer el año
        const diferencia = new Date().getFullYear() - this.anio;
        //Cada año de dieferencai hay qie reducir 3% el valor del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;
        //console.log(diferencia);
        
        /*
        Si el seguro se básico se multiplica por 30% mas
        Si el seguro es completo 50% mas
        */
       
       if(this.tipo === 'basico'){
           cantidad *= 1.30;
        }else{
            cantidad *= 1.50;
        }
        
        //console.log(cantidad);
        return cantidad;
        //console.log(this.marca);
        //console.log(this.anio);
        //console.log(this.tipo);
    }

}



//Todo lo que se Muestra
class Interfaz{
    //Mensaje que se imprime en el Html
    mostrarMensaje(mensaje,tipo){
        const div = document.createElement('div');
    
        if(tipo === 'error'){
            div.classList.add('mensaje', 'error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = `${mensaje}`;
        formulario.insertBefore(div,document.querySelector('.form-group'));
        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        }, 3000)
    }

//Imprimir el resultado de la cotizacion
    mostrarResultado(seguro,total){
        const resultado = document.getElementById('resultado');
        let marca;
        //console.log(seguro);
        switch(seguro.marca){
            case '1':
            marca = 'Americano';
            break
            case '2':
            marca = 'Asiatico';
            break;
            case '3':
            marca = 'Europeo';
            break;
        }
        //console.log(marca);
    
        const div = document.createElement('div');
        //insertar la informacion
        div.innerHTML = `
            <p class="header">Tu Resume:</p>
            <p>Marca: ${marca}</p>
            <p>Año: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total $ ${total}</p>
    
        `;
        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block'; 
        setTimeout(function(){
            spinner.style.display = 'none';
            resultado.appendChild(div);
        },3000) 
    
    }
}
    


//EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e){
    e.preventDefault(); 
    
    //leer la marca seleccionada del select
    const marca =  document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //console.log(marcaSeleccionada);

    //leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear una instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === ''|| tipo === ''){
        //Interfaz imprimiendo un error
        //console.log('faltan Datos');
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo','error')
    }else{
        //Limpira resultado anteriores
        const resultados = document.querySelector('#resultado div');
        if(resultados != null){
            resultados.remove();
        }

        //Interfaz seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
        //console.log(seguro);
        const cantidad = seguro.cotizarSeguro(seguro);
        //console.log('Todo Correcto')

        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...','exito')
    }

    //console.log('Presionado');
});

const max  = new Date().getFullYear(),
min = max -20;

//console.log(max);
//console.log(min);

const selectAnios = document.getElementById('anio');

for(let i = max; i > min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}
