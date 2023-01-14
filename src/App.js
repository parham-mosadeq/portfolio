import React from 'react';
import AboutMe from './components/aboutMe/AboutMe';
import Layout from './components/layout';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Works from './components/work/Works';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    // ! rendering routes to layout
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/contactMe' element={<Contact />} />
        <Route path='/work' element={<Works />} />
      </Routes>
    </Layout>
  );
};

export default App;
