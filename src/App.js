import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router} from "react-router-dom";
import './scss/index.scss'

function App() {

  return (
      <Router>
        <Header />
        <Content />
        <Footer />
      </Router>
  );
}

export default App;
