import React, { useState } from 'react';

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addItemToCart(e) {
    const item = e.target.value;
    console.log(item);
    setCart(cart => [...cart, item]);
  }

	return (
		<div className="app">
			<div className="items">
				<button value="MacBook Pro" onClick={addItemToCart}>💻 MacBook Pro</button>
				<button value="iPhone XS" onClick={addItemToCart}>📱iPhone XS</button>
				<button value="Gem" onClick={addItemToCart}>💎 Gem</button>
				<button value="Teddy Bear" onClick={addItemToCart}>🧸 Teddy Bear</button>
			</div>
			<div className="cart">
				<span style={{"fontWeight":"bold"}}>Cart : </span>
				{cart.map(item => <span key={item}>{item} &nbsp; </span>)}				
			</div>
		</div>
	);
}

export default ShoppingCart;