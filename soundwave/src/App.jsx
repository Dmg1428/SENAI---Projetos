import React, { useState } from "react";
import ProductCard from "./components/ProductCard.jsx";
import "./style/main.css";

// Array de produtos
const products = [
  { id: "fone1", category: "Fones de Ouvido", name: "SoundWave Pro", desc: "Som cristalino com cancelamento de ruído.", price: "R$ 399,00", img: "src/imagens/fone1.png" },
  { id: "fone2", category: "Fones de Ouvido", name: "SoundWave Lite", desc: "Leve, confortável e bateria duradoura.", price: "R$ 249,00", img: "src/imagens/fone2.png" },
  { id: "fone3", category: "Fones de Ouvido", name: "SoundWave Max", desc: "Máxima potência e graves profundos.", price: "R$ 499,00", img: "src/imagens/fone3.png" },
  { id: "teclado1", category: "Teclados", name: "SoundWave Mechanical", desc: "Teclado mecânico com resposta rápida.", price: "R$ 299,00", img: "src/imagens/teclado1.png" },
  { id: "teclado2", category: "Teclados", name: "SoundWave RGB", desc: "Iluminação RGB personalizável.", price: "R$ 349,00", img: "src/imagens/teclado2.png" },
  { id: "carregador1", category: "Carregadores", name: "SoundWave Turbo", desc: "Carregamento rápido e seguro.", price: "R$ 129,00", img: "src/imagens/carregador1.png" },
  { id: "carregador2", category: "Carregadores", name: "SoundWave Wireless Base", desc: "Conforto sem fio e eficiente.", price: "R$ 199,00", img: "src/imagens/carregador2.png" },
  { id: "mouse1", category: "Outros Dispositivos", name: "Mouse Gamer SoundWave", desc: "Precisão e conforto para jogos.", price: "R$ 189,00", img: "src/imagens/mouse1.png" },
  { id: "caixa1", category: "Outros Dispositivos", name: "Caixa Bluetooth SoundWave Boom", desc: "Som potente em qualquer ambiente.", price: "R$ 279,00", img: "src/imagens/caixa1.png" },
  { id: "relogio1", category: "Outros Dispositivos", name: "Smartwatch SoundWave Fit", desc: "Monitoramento inteligente de saúde e fitness.", price: "R$ 399,00", img: "src/imagens/relogio1.png" }
];

function App() {
  const categories = ["Fones de Ouvido", "Teclados", "Carregadores", "Outros Dispositivos"];
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalVisible(true);
    e.target.reset(); // reseta campos automaticamente
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div>
      {/* CABEÇALHO */}
      <header className="cabecalho">
        <div className="container">
          <h1 className="logo">SoundWave</h1>
          <nav>
            <ul className="menu">
              <li className="dropdown">
                <a href="#">Produtos ▾</a>
                <ul className="submenu">
                  {categories.map(cat => (
                    <li className="submenu-category" key={cat}>
                      <span className="category-title">{cat}</span>
                      <ul className="submenu-items">
                        {products.filter(p => p.category === cat).map(p => (
                          <li key={p.id}><a href={`#${p.id}`}>{p.name}</a></li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* BANNER */}
      <section className="banner">
        <h2>Som, Tecnologia e Estilo</h2>
        <p>Descubra a nova geração de áudio e dispositivos SoundWave — qualidade premium e design moderno.</p>
        <a href="#fone1" className="btn">Explorar Produtos</a>
      </section>

      <hr className="divider" />

      {/* SEÇÕES DE PRODUTOS */}
      {categories.map(cat => (
        <section key={cat} id={cat.toLowerCase().replace(/\s/g, "")} className={`categoria ${cat.replace(/\s/g, "").toLowerCase()}`}>
          <h2>{cat === "Fones de Ouvido" ? "🎧 " : cat === "Teclados" ? "⌨️ " : cat === "Carregadores" ? "⚡ " : "📱 "}{cat}</h2>
          <div className="grid-produtos">
            {products.filter(p => p.category === cat).map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
          <hr className="divider" />
        </section>
      ))}

      {/* SOBRE */}
      <section id="sobre" className="sobre">
        <h2>Sobre a SoundWave</h2>
        <p>Produtos que unem design moderno, tecnologia de ponta e experiência sonora premium.</p>
      </section>
      <hr className="divider" />

      {/* CONTATO */}
      <section id="contato" className="contato">
        <h2>Fale Conosco</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Sua mensagem" required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
      </section>
      <hr className="divider" />

      {/* MODAL */}
      {modalVisible && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Mensagem enviada!</h3>
            <p>Obrigado por entrar em contato. Responderemos em breve.</p>
            <button className="btn" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}

      {/* RODAPÉ */}
      <footer className="rodape">
        <p>&copy; 2025 SoundWave. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
