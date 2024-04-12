import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Recommendation from './components/recommendation/Recommendation';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Recommendation />
        <Contact />
      </main>
    </>
  );
}

export default App;
