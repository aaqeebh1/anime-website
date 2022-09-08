import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Results from './pages/Results';
import AnimeInfo from './pages/AnimeInfo';

const App = () => {
  return (
    <Router>
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/results' element={<Results/>}/>
        <Route path='results/:id' element={<AnimeInfo/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
