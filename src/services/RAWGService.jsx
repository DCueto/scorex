import TokenStorage from "./TokenStorage";

class RAWGService {

  constructor(){
    this.store = new TokenStorage('RAWG_token');
  }

  get(url) {

    let options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    return fetch(url, options);
  }

  async searchGames(){
    const apiKey = import.meta.env.VITE_RAWG_APIKEY;
    const url = `https://api.rawg.io/api/games?key=${apiKey}`;
    
    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );

  }


}


export default RAWGService;