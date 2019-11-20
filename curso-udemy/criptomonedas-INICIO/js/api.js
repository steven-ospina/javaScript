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

        //console.log(monedas);

        return{monedas}
    }

    async obtenerValores(moneda,criptomoneda){
        const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en rest api
        const urlCovertir = await fetch(url);

        const resultado = await urlCovertir.json();

        return{
            resultado
        }
    }
}