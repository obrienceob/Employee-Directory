import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Directory from './components/Directory/Directory';
import Footer from './components/Footer/Footer';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (      
    <div className="App">
      <Navbar />
      <Directory />
      <Footer />
    </div>
  );
}

export default App;

