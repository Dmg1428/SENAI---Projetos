import React from 'react';
// ⭐ Importe a imagem da logo
import logoImage from '../imagens/logo.jpeg'; // 🛑 Confirme o caminho novamente

function About() {
  return (
    <section id="sobre" className="sobre">
      <h2>Sobre a SoundWave</h2>
      
      {/* ⭐ AQUI ADICIONAMOS A IMAGEM DA LOGO */}
      <div className="about-logo-container">
        <img src={logoImage} alt="Logo SoundWave" className="about-logo-image" />
      </div>

      <p className="mission-quote">
        Na <strong>SoundWave</strong>, acreditamos que a tecnologia deve aprimorar a experiência humana.
        Nossa missão é fornecer produtos de áudio e acessórios eletrônicos de alta qualidade
        que combinem inovação, design e desempenho excepcional, conectando as pessoas à sua paixão.
      </p>

      <div className="about-sections">
        <div className="about-item">
          <span className="icon-accent">🎧</span>
          <h3>Nossa Visão</h3>
          <p>
            Ser a marca líder no mercado de eletrônicos, reconhecida pela excelência em
            produtos de áudio e pela satisfação dos nossos clientes. Buscamos constantemente
            inovar e trazer as últimas tendências tecnológicas para o seu dia a dia.
          </p>
        </div>
        <div className="about-item">
          <span className="icon-accent">✨</span>
          <h3>Qualidade e Inovação</h3>
          <p>
            Cada produto SoundWave é projetado com rigorosos padrões de qualidade e
            testado para garantir durabilidade e performance superior. Investimos em
            pesquisa e desenvolvimento para oferecer a você o que há de mais moderno.
          </p>
        </div>
        <div className="about-item">
          <span className="icon-accent">💙</span>
          <h3>Compromisso com o Cliente</h3>
          <p>
            A sua experiência é a nossa prioridade. Oferecemos um atendimento dedicado
            e suporte completo, desde a escolha do produto até o pós-venda.
            Queremos que você se sinta parte da família SoundWave.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;