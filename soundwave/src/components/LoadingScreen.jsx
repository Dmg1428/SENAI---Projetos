import React, { useState, useEffect } from 'react';

// ⭐ AJUSTE O CAMINHO DA IMAGEM SE NECESSÁRIO
// Assume que 'logo.jpeg' está em 'src/imagens' e este componente está em 'src/components'
import logoImage from '../imagens/logo.jpeg'; 

// Duração da transição 'opacity' no CSS em milissegundos (0.5s = 500ms)
const FADE_DURATION = 500; 

function LoadingScreen({ isVisible }) {
  
    // Estado para controlar se o componente deve estar montado na DOM (para transição)
    const [shouldRender, setShouldRender] = useState(isVisible);

    useEffect(() => {
        if (isVisible) {
            // Se deve estar visível, monta na DOM imediatamente
            setShouldRender(true);
        } else {
            // Se não deve estar visível, espera a duração da transição antes de desmontar
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, FADE_DURATION); 
            
            return () => clearTimeout(timer); // Limpa o timer na desmontagem ou re-execução
        }
    }, [isVisible]); // Reage a mudanças na prop isVisible

    // Se shouldRender for falso, remove o componente da DOM
    if (!shouldRender) {
        return null;
    }

    // Determina a classe. Se isVisible=false, a classe 'fade-out' é aplicada 
    // e o CSS inicia a transição de opacidade.
    const overlayClass = isVisible ? 'loading-overlay' : 'loading-overlay fade-out';

    return (
        <div className={overlayClass}>
            <div className="loading-content">
                <img 
                    src={logoImage} 
                    alt="Carregando Logo Soundwave" 
                    className="loading-logo" 
                    // Adiciona um fallback simples caso a imagem não carregue
                    onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/000000/FFFFFF?text=LOGO" }}
                />
                {/* O SPINNER AGORA VAI APARECER GRAÇAS AO CSS corrigido */}
                <div className="loading-spinner"></div>
            </div>
        </div>
    );
}

export default LoadingScreen;