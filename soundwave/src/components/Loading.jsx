import React from "react";
import "../style/main.css";
import logo from "../imagens/logo.png";

function Loading() {
  return (
    <div className="loading-overlay">
      <div className="loading">
        <img src={logo} alt="Logo" className="loading-logo" />
        <p>Carregando...</p>
      </div>
    </div>
  );
}

export default Loading;
