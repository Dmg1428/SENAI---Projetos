import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";

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

const banners = [
  "src/imagens/banner1.png",
  "src/imagens/banner2.png",
  "src/imagens/banner3.png"
];

function Home() {
  const categories = ["Fones de Ouvido", "Teclados", "Carregadores", "Outros Dispositivos"];
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
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

      <section className="banner">
        <img src={banners[currentBanner]} alt={`Banner ${currentBanner + 1}`} className="banner-img"/>
        <div className="banner-text">
          <h2>Som, Tecnologia e Estilo</h2>
          <p>Descubra a nova geração de áudio e dispositivos SoundWave — qualidade premium e design moderno.</p>
          <a href="#fone1" className="btn">Explorar Produtos</a>
        </div>
      </section>

      {categories.map(cat => (
        <section key={cat} id={cat.toLowerCase().replace(/\s/g, "")} className="categoria">
          <h2>{cat}</h2>
          <div className="grid-produtos">
            {products.filter(p => p.category === cat).map(p => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </section>
      ))}

      <footer className="rodape">
        <p>&copy; 2025 SoundWave. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
