import React from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='f-heading'>
        <h1>Features</h1>
        <p>Here are some Features of the software</p>
      </div>
      <Features/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
