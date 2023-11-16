import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import { useEffect, useState } from 'react';

function Router({inputValue, isSearching}){

  return (
  <Routes>
    <Route path="/" element={<HomePage inputValue={inputValue} isSearching={isSearching} />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
  )
}
export default Router;