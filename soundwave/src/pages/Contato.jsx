import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contato() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalVisible(true);
    e.target.reset();
  };

  const closeModal = () => setModalVisible(false);

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

      <section className="contato">
        <h2>Fale Conosco</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>

      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Mensagem enviada!</h3>
            <p>Obrigado por entrar em contato. Responderemos em breve.</p>
            <button className="btn" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

      <footer className="rodape">
        <p>&copy; 2025 SoundWave. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Contato;
