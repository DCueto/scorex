import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import ProfilePage from './pages/ProfilePage/ProfilePage';

import { useEffect, useState } from 'react';

function Router({inputValue, isSearching, isAuthenticated}){

  return (
  <Routes>
    <Route path="/" element={<HomePage inputValue={inputValue} isSearching={isSearching} />} />
    <Route path="/game/:gameId" element={<GamePage isAuthenticated={isAuthenticated} />} />
    <Route path="/profile/:username" element={<ProfilePage isAuthenticated={isAuthenticated} />} />
  </Routes>
  )
}
export default Router;