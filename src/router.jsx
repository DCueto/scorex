import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/GamePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";

function Router(){
  
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/game" element={<GamePage />} />
  </Routes>
}

export default Router;