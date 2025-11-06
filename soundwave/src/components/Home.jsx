import React from "react";
import ProductCard from "./ProductCard";

// ✅ Importação das imagens locais originais
import fone1 from "../imagens/fone1.png";
import fone2 from "../imagens/fone2.png";
import fone3 from "../imagens/fone3.png";
import teclado1 from "../imagens/teclado1.png";
import teclado2 from "../imagens/teclado2.png";
import carregador1 from "../imagens/carregador1.png";
import carregador2 from "../imagens/carregador2.png";
import mouse1 from "../imagens/mouse1.png";
import caixa1 from "../imagens/caixa1.png";
import relogio1 from "../imagens/relogio1.png";

// 🛑 Importação dos 3 Banners
import bannerHeadsets from "../imagens/Banner1.jpeg";
import bannerKeyboards from "../imagens/Banner2.jpeg";
import bannerMouses from "../imagens/Banner3.jpeg";

// ==================== PRODUTOS ====================
const products = [
  { id: "fone1", category: "Fones de Ouvido", name: "SoundWave Pro", desc: "Som cristalino com cancelamento de ruído.", price: "R$ 399,00", img: fone1 },
  { id: "fone2", category: "Fones de Ouvido", name: "SoundWave Lite", desc: "Leve, confortável e bateria duradoura.", price: "R$ 249,00", img: fone2 },
  { id: "fone3", category: "Fones de Ouvido", name: "SoundWave Max", desc: "Máxima potência e graves profundos.", price: "R$ 499,00", img: fone3 },
  { id: "teclado1", category: "Teclados", name: "SoundWave Mechanical", desc: "Teclado mecânico com resposta rápida.", price: "R$ 299,00", img: teclado1 },
  { id: "teclado2", category: "Teclados", name: "SoundWave RGB", desc: "Iluminação RGB personalizável.", price: "R$ 349,00", img: teclado2 },
  { id: "carregador1", category: "Carregadores", name: "SoundWave Turbo", desc: "Carregamento rápido e seguro.", price: "R$ 129,00", img: carregador1 },
  { id: "carregador2", category: "Carregadores", name: "SoundWave Wireless Base", desc: "Conforto sem fio e eficiente.", price: "R$ 199,00", img: carregador2 },
  { id: "mouse1", category: "Outros Dispositivos", name: "Mouse Gamer SoundWave", desc: "Precisão e conforto para jogos.", price: "R$ 189,00", img: mouse1 },
  { id: "caixa1", category: "Outros Dispositivos", name: "Caixa Bluetooth SoundWave Boom", desc: "Som potente em qualquer ambiente.", price: "R$ 279,00", img: caixa1 },
  { id: "relogio1", category: "Outros Dispositivos", name: "Smartwatch SoundWave Fit", desc: "Monitoramento inteligente de saúde e fitness.", price: "R$ 399,00", img: relogio1 },
];

// Array dos banners com o link de âncora correspondente
const presentationBanners = [
    { src: bannerHeadsets, alt: "Headsets", link: "#fonesdeouvido" },
    { src: bannerKeyboards, alt: "Keyboards", link: "#teclados" },
    { src: bannerMouses, alt: "Mouses", link: "#outrosdispositivos" }, 
];

function Home() {
  const categories = ["Fones de Ouvido", "Teclados", "Carregadores", "Outros Dispositivos"];

  return (
    <div className="page-container">
      
      {/* 🛑 SEÇÃO DE BANNER DE APRESENTAÇÃO (Grid) */}
      <section className="banners-apresentacao-container">
          <div className="banners-grid">
              {presentationBanners.map((banner, index) => (
                  <a key={index} href={banner.link} className="banner-link-wrapper">
                      <img 
                          src={banner.src} 
                          alt={banner.alt} 
                          className="banner-image-item"
                      />
                  </a>
              ))}
          </div>
      </section>
      {/* FIM DA SEÇÃO DE BANNER */}

      {/* ==================== SEÇÕES DE PRODUTOS ==================== */}
      {categories.map((cat) => (
        <section
          key={cat}
          id={cat.toLowerCase().replace(/\s/g, "")}
          className="categoria"
        >
          <h2>{cat}</h2>
          <div className="grid-produtos">
            {products
              .filter((p) => p.category === cat)
              .map((p) => (
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