
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import UeberMich from './pages/UeberMich';
import Blog from './pages/Blog';
import Galerie from './pages/Galerie';
import Danke from './pages/Danke';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/galerie' element={<Galerie/>} />
        <Route path='/kontakt' element={<Kontakt/>} />
        <Route path='/ueber-mich' element={<UeberMich/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path="/danke" element={<Danke/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
