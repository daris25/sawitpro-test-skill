import React, { useState } from "react";
import "./styles.css";
import CartView from "../../component/CartView";

function HeaderView() {
  const [shwowCart, setShowCart] = useState(false);

  return (
    <div className="containerHeader">
      <CartView onShowCart={shwowCart} onCloseCart={() => setShowCart(false)} />
      <div className="boxHead">
        <label style={{ marginLeft: 25, fontSize: 25, color: "white" }}>
          Rent Movie Store
        </label>
        <div onClick={() => setShowCart(true)} className="cartIconBtn">
          <img
            className="iconCart"
            alt="cart-img"
            src="https://static-00.iconduck.com/assets.00/cart-shopping-list-icon-1970x2048-awqo7u9m.png"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderView;
