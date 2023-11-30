import './ListPage.css'
import ScoreXService from '../../services/ScoreXService';
import UserStore from '../../services/UserStore';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../App';
import ListCard from '../../components/Card/ListCard';

function ListPage() {

  const userStore = new UserStore();
  const scorex = new ScoreXService();

  const [myUser, setMyUser] = useState(userStore.getUser());

  const { myList, setMyList } = useContext(AuthContext);

  const handleRemoveGameOnMyList = (e) => {

    const listRemovedItem = myList.filter( (item) => {
      return item.gameId !== parseInt(e.target.dataset.id);
    });

    scorex.patchUserList(myUser.id, JSON.stringify({"games_played": listRemovedItem}));
    setMyList(listRemovedItem);

  }


return (
  <section className="ListPage">
    <div className="imagecontainer">
      <img className="imgtop" src= "src/assets/img/840_560.jpeg" alt="headerpic"/> 
      <div className="imggradient"></div>
    </div>
    <h1 className='hellouser'> Welcome to your list <p className="coloruser">{myUser.username}</p> </h1>
    <h2 className="Numbergames"> You have {myList?.length} games on your list </h2>


    { myList?.map( (item) => (
      <ListCard key={item.id} item={item} handleRemoveGameOnMyList={handleRemoveGameOnMyList} />
      ))
    
    }
  </section>
)


}















export default ListPage;