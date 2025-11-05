<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import Loading from "./components/Loading.jsx";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // tempo de loading
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
=======
import React, { useState } from 'react';
import Header from './components/Header';
import HomeContent from './components/Home'; // Usando HomeContent para o corpo da Home
import AboutContent from './components/About'; // Usando AboutContent para o corpo do About
import ContactContent from './components/Contact'; // Usando ContactContent para o corpo do Contact
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Componente da tela de carregamento
import './style/main.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // NOVO ESTADO: Controla a visibilidade da tela de carregamento
  const [isLoading, setIsLoading] = useState(false); 

  const handleNavigate = (page) => {
    // 1. Ativa a tela de carregamento
    setIsLoading(true); 

    // 2. Simula o tempo de carregamento (1 segundo)
    setTimeout(() => {
      // 3. Troca a página após o 'carregamento'
      setCurrentPage(page);
      window.scrollTo(0, 0); // Rolagem para o topo ao mudar de página
      
      // 4. Inicia o fade-out da tela de carregamento (deixa ele visível por mais 500ms para a transição)
      setTimeout(() => {
        setIsLoading(false);
      }, 500); 
      
    }, 1000); // Tempo total que a tela de loading fica visível (1000ms)
  };

  const renderPage = () => {
    // Note que usamos o nome da variável importada (HomeContent, AboutContent, etc.)
    switch (currentPage) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="App-Layout"> 
      
      {/* RENDERIZA O LOADING SCREEN CONDICIONALMENTE, ele aparecerá sobre todo o resto */}
      {/* O componente LoadingScreen se encarrega de aplicar a classe de fade-out e o 'pointer-events: none' */}
      <LoadingScreen isVisible={isLoading} /> 
      
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="page-container">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
>>>>>>> Daniel
  );
}

export default App;