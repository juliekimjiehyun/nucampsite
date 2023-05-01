import { Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import React from 'react';
import './App.css';
import {Container, Navbar, NavbarBrand} from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='directory' element={<CampsitesDirectoryPage />} />
            <Route
                path='directory/:campsiteId'
                element={<CampsiteDetailPage />}
            />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
