import React from "react";
import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div>
      <header className="cabecalho">
        <div className="container">
          <h1 className="logo">SoundWave</h1>
          <nav>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="sobre">
        <h2>Sobre a SoundWave</h2>
        <p>Produtos que unem design moderno, tecnologia de ponta e experiência sonora premium.</p>
      </section>

      <footer className="rodape">
        <p>&copy; 2025 SoundWave. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Sobre;
