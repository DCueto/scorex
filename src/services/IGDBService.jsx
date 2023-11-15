import TokenStorage from "./TokenStorage";

class IGDBService {

  constructor(){
    this.store = new TokenStorage('IGDB_token');
  }

  async generateToken(){
    const clientId = import.meta.env.VITE_IGDB_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_IGDB_CLIENT_SECRET;
    const url = 'https://id.twitch.tv/oauth2/token';

    let urlParams = new URLSearchParams();
    urlParams.set('grant_type', 'client_credentials');
    urlParams.set('client_id', clientId);
    urlParams.set('client_secret', clientSecret);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlParams
    };

    await fetch(url, options)
      .then( response => response.json() )
      .then( data => {
        const tokenData = {
          token: data.access_token,
          generationTokenDate: Date.now(),
          expiresIn: data.expires_in * 1000
        }

        this.store.setToken( JSON.stringify( tokenData ) );

      })
      .catch( err => console.error('Error al generar token: ', err) );

  }

  get(url, fields) {
    if( ( this.store.tokenExists() && this.store.tokenExpired() ) || ( !this.store.tokenExists() ) ){
      this.generateToken();
    }

    if( !this.store.tokenExists() ){
      this.generateToken();
    }

    const token = this.store.getToken();

    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-ID': import.meta.env.VITE_IGDB_CLIENT_ID,
        'Authorization': 'Bearer ' + token
      },
      body: fields
    }

    // ERROR AL HACER EL FETCH
    // El token funciona
    // El error se encuentra con los CORS. La API de IGDB te exige usar un proxy si estás consumiendo
    // los datos desde un cliente.
    // Mirar documentación al respecto en la web de la api. Se recomienda usar un proxy server
    // con CORS Anywhere (github repo) e instalarlo en un servicio como heroku para consumirlo

    return fetch(url, options);
  }

  async searchGames(){
    const url = 'https://api.igdb.com/v4/games';

    let data_fetch;

    return await this.get(url, 'fields *;')
      .then( response => response.json() )
      .then( data => {
        data_fetch = data;
        console.log(data_fetch);
      })
      .catch( err => console.log('Error en el fetch: ', err ) );

    
  }



}


export default IGDBService;