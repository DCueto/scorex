
class ScoreXService {

  constructor(){
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

  post(url, body){
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }

    return fetch(url, options);
  }

  patch(url, body){
    let options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    }

    return fetch(url, options);
  }

  async postUser(body){
    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/users`;

    return await this.post(url, body)
      .then( response => response.json())
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err));

  }

  async getUsers(){

    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/users`;
    
    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );

  }

  async getUser(id){

    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/users/${id}`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );

  }

  async getUserByUsername(username){
    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/users?username=${username}`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );
  }

  async postReview(body){
    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/reviews`;

    return await this.post(url, body)
      .then( response => response.json())
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err));
  }

  async getReview(id){

    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/reviews/${id}`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );

  }
  
  async getUserReviews(userId){
    
    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/reviews?userId=${userId}&_sort=review_date&_order=desc`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );
  }

  async getLatestsReviews(numReviews){

    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/reviews?_sort=review_date&_order=desc&_limit=${numReviews}`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );
  }

  async getGameReviews(gameId){
    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/reviews?gameId=${gameId}`;

    return await this.get(url)
      .then( response => response.json() )
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err ) );
  }


  async getUserList(userId){

    this.getUser(userId)
      .then( (user) => user.games_played )
      .catch( (err) => console.error(err) );
  }

  async patchUserList(userId, body){

    const url = `https://scorex-json-server-194968fe0d2c.herokuapp.com/users/${userId}`;

    return await this.patch(url, body)
      .then( response => response.json())
      .then( data => data)
      .catch( err => console.log('Error en el fetch: ', err));

  }

}


export default ScoreXService;