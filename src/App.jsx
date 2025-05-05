import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/App.css';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;