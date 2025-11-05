import React from 'react';
import logoImage from '../imagens/logo.jpeg'; // 🛑 Confirme o caminho

const Header = ({ onNavigate, currentPage }) => {

  return (
    <header className="cabecalho"> 
      
      {/* 🛑 CONTAINER USANDO AS CLASSES CORRIGIDAS */}
      <div className="logo-container" onClick={() => onNavigate('home')}>
          <img
            src={logoImage}
            alt="Logo"
            className="logo-header-img" // Usa a classe que agora tem 50px
          />
          <h1 className="logo-header-text">SoundWave</h1> {/* Usa a classe que agora tem 1.8rem */}
      </div>
      
      <nav>
        <ul className="menu">
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }} 
              className={currentPage === 'home' ? 'active-link' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('about'); }} 
              className={currentPage === 'about' ? 'active-link' : ''}
            >
              Sobre
            </a>
          </li>
          <li>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} 
              className={currentPage === 'contact' ? 'active-link' : ''}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;