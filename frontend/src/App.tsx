import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Layouts/Header/index';
import MainPage from './Pages/MainPage/index';

function App() {
  return (
    <div className="App">
      <NavBar />
	<MainPage/>
    </div>
  );
}

export default App;
