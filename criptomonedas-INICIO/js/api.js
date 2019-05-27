class API {
    constructor(apikey){
        this.apikey = apikey;
    }
    //Obtener todas las monedas
    async obtenerMonedasApi(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la api
        const urlObtenerMonedas = await fetch(url);

        //Respuesta en json
        const monedas = await urlObtenerMonedas.json();

        console.log(monedas);

        return{monedas}
    }
}