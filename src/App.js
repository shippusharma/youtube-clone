import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideo from './components/RecommendedVideo';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <div className='app'>
        <Header />
        {/* <Routes> */}
        <div className='app__page'>
          {/* <Route path='/' element={}> */}
          <Sidebar />
          <RecommendedVideo />
          {/* </Route> */}
        </div>
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
