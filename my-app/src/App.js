
import './App.css';
import {AnimatePresence} from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ScrollToTopButton from './components/ScrollToTopButton';

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import UeberMich from './pages/UeberMich';
import Blog from './pages/Blog';
import Galerie from './pages/Galerie';
import Danke from './pages/Danke';
import NotFound from './pages/NotFound';

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
    </Router>
  );
}

export default App;
