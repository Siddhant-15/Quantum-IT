import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Classes from './components/Classes/Classes';
import Events from './components/Events/Events';
import Guide from './components/Guide/Guide';
import Recover from './components/Recover/Recover';
import Activity from './components/Activities/Activity';
import Places from './components/Places/Places';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <MyNavbar />
      <Hero />
      <Classes />
      <Events />
      <Guide />
      <Recover />
      <Activity />
      <Places />
      <Footer />

      {/* Add other sections here */}
    </div>
  );
}

export default App;
