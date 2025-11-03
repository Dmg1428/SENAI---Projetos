import React from 'react';

function ProductCard({ img, name, desc, price, id }) {
  return (
    <div className="produto" id={id}>
      <img src={img} alt={name} className="produto-img"/>
      <h3>{name}</h3>
      <p>{desc}</p>
      <span>{price}</span>
    </div>
  );
}

export default ProductCard;
