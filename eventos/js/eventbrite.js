class EventBrite{
    constructor(){
        this.token_auth = '3OAEKY6ZD2R4AGVUBGFW';
        this.ordenar = 'date';
    }

    //obtienen las categoras en init()
    async obtenerCategorias(){
        //Consulta las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //Esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        //Devolever el resultado

        return{
            categorias 
        }
    }

}