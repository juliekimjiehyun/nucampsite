import { Routes, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import { AboutPage, CampsiteDetailPage, CampsitesDirectoryPage, ContactPage, HomePage} from './pages';
import { Header, Footer } from './components';


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
