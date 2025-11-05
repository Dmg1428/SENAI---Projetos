import React from "react";

function ProductCard({ id, name, desc, price, img }) {
  if (!img) {
    console.error("Imagem não definida para o produto:", name);
    return null;
  }

  return (
    <div className="product-card" id={id}>
      {/* NOVO CONTÊINER: Usado para definir a altura fixa e cortar a imagem. */}
      <div className="product-image-container">
        {/* IMAGEM: Recebe a classe para ser forçada a preencher o contêiner (object-fit: cover). */}
        <img src={img} alt={name} className="product-image" />
      </div>
      
      <h3>{name}</h3>
      <p>{desc}</p>
      <span className="price">{price}</span>
      <button className="add-to-cart">Adicionar ao Carrinho</button> 
    </div>
  );
}

export default ProductCard;