import React from 'react';
import AboutMe from './components/aboutMe/AboutMe';
import Layout from './components/layout';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    // ! rendering routes to layout
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/contactMe' element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
