import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ListPage from './pages/ListPage/ListPage';

function Router({inputValue, isSearching, isAuthenticated}){

  return (
  <Routes>
    <Route path="/" element={<HomePage inputValue={inputValue} isSearching={isSearching} />} />
    <Route path="/game/:gameId" element={<GamePage isAuthenticated={isAuthenticated} />} />
    <Route path="/profile/:username" element={<ProfilePage isAuthenticated={isAuthenticated} />} />
    <Route path="/my-list" element={<ListPage/>} />
  </Routes>
  )
}
export default Router;