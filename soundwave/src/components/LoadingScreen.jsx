import React from 'react';
// ⭐ CAMINHO CORRIGIDO: Assume que 'logo.jpeg' está em 'src/imagens' e este componente está em 'src/components'
// Se a imagem estiver em 'src/logo.jpeg', use '../../logo.jpeg'
import logoImage from '../imagens/logo.jpeg'; 

function LoadingScreen({ isVisible }) {
  
  // Adiciona a classe 'fade-out' para que o CSS de transição funcione
  const overlayClass = isVisible ? 'loading-overlay' : 'loading-overlay fade-out';

  if (!isVisible && overlayClass.includes('fade-out')) {

    return null;
  }

  return (
    <div className={overlayClass}>
      <div className="loading-content">
        <img 
          src={logoImage} 
          alt="Carregando Logo Soundwave" 
          className="loading-logo" 
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/000000/FFFFFF?text=LOGO" }}
        />
        {/* Spinner de CSS simples */}
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;