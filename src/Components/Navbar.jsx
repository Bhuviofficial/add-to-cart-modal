import React from "react";

const Navbar = ({ cartCount, openCart }) => {
  return (
    <header>
      <div className="brand">CuteCart 🛍️</div>
      <button className="cart-btn" onClick={openCart}>
        Cart ({cartCount})
      </button>
    </header>
  );
};

export default Navbar;
