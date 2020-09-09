import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Introduction from './Components/Introduction/Introduction'
import MyServices from './Components/MyServices/MyServices'
import AboutMe from './Components/AboutMe/AboutMe'
import MyWork from './Components/MyWork/MyWork'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
