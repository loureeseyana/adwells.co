import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import './styles/style.css';
import About from './components/about';
import Timeline from './components/experience'
import MainSection from './components/main-section';
import Services from './components/services';
import Contact from './components/contact';
import Menu from './components/menu'


class App extends Component {
  render() {
    return (
      <div>
        <MainSection></MainSection>
          <Menu></Menu>
          <About></About>
         	<Services></Services> 
           <Timeline></Timeline>
          <Contact></Contact>
        <Routes>
        <Route exact path='/' element={<MainSection />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/experience' element={<Timeline />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    );
  }
}

export default App;
