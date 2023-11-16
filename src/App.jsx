import './App.css'
import Router from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div id="app">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
