import React, { useState } from 'react';

// Importe o Modal (se estiver usando)
// import Modal from './Modal'; 

const ContactContent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando mensagem...');

    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  // 🛑 Atenção: Classes Tailwind substituídas por classes customizadas: .contato, input, textarea, .btn

  return (
    // Usa a classe .contato definida no seu main.css
    <section className="contato"> 
      
      {/* O main.css já estiliza h2 dentro de .contato, se necessário */}
      <h2>Fale Conosco</h2>
      
      {/* A classe .contato form é crucial para centralizar e alinhar */}
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            // Removendo classes Tailwind
          />
        </div>
        
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            // Removendo classes Tailwind
          />
        </div>
        
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            // Removendo classes Tailwind
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          // Usando a classe global .btn, definida no seu main.css
          className="btn" 
          style={{ width: '100%', opacity: isSubmitting ? 0.6 : 1 }} // Estilo inline simples para disabled
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
        
        {status && (
          // O status usará o estilo padrão de texto, mas você pode adicionar uma classe se quiser
          <p style={{ color: status.includes('sucesso') ? 'green' : 'black', textAlign: 'center', marginTop: '15px' }}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactContent;