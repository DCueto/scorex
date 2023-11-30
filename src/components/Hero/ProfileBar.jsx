import { useNavigate } from 'react-router-dom';
import './ProfileBar.css';
import UserStore from '../../services/UserStore';
import { AuthContext } from './../../App';
import { useContext } from 'react';

const ProfileBar = ({profileData, isMyUser}) => {

  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const userStore = new UserStore();

  const handleLogout = () => {
    userStore.logOut();
    setIsAuthenticated(false);
  }

  return (
    <div className="profileBar">
      <div className='profileBarUser'>
        <div className='profileImg'></div>
        <p>@{profileData?.username}</p>
      </div>

      {isMyUser && 
        <div className='profileBarButtons'>
          <button className='myListBtn' onClick={ () => navigate('/my-list') }>My List</button>
          <button className='logoutBtn' onClick={handleLogout}>Logout</button>
          <button className='settingsBtn'>Settings</button>
        </div>
      }

      {/* <div className='profileFollowInfo'>
        <p className='profileFollowing'>{profileData.following} <span>following</span></p>
        <p className='profileFollowers'>{profileData.followers} <span>followers</span></p>
      </div> */}
    </div>
  )
}

export default ProfileBar;