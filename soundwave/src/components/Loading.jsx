import React from "react";
import "../style/main.css";
import logo from "../imagens/logo.png";

function Loading() {
  return (
    <div className="loading-overlay">
      <img src={logo} alt="Logo SoundWave" className="loading-logo" />
      <p>Carregando...</p>
    </div>
  );
}

export default Loading;
