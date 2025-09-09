
import './App.css';
import React from 'react';
import {AnimatePresence} from 'framer-motion';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import BlogPost from './components/BlogPost';

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import UeberMich from './pages/UeberMich';
import Blog from './pages/Blog';
import Galerie from './pages/Galerie';
import Danke from './pages/Danke';
import NotFound from './pages/NotFound';

const isLocalhost = window.location.hostname === 'localhost';
const Router = isLocalhost ? BrowserRouter : HashRouter;

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/galerie' element={<Galerie/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/ueber-mich' element={<UeberMich/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/blog/:id' element={<BlogPost/>} />
        <Route path="/danke" element={<Danke/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <NavigationBar />
      <ScrollToTopButton/>
      <AnimatedRoutes/>
      <Footer />
    </Router>
  );
}

export default App;
