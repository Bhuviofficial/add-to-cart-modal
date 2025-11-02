import React from "react";

const CartModal = ({ isOpen, closeCart, cartItems, removeFromCart }) => {
  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`}>
      <h2>Your Cart 🛒</h2>
      <button className="cart-btn" onClick={closeCart}>
        Close
      </button>
      {cartItems.length === 0 ? (
        <p style={{ marginTop: "1rem" }}>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h4>{item.title.slice(0, 30)}...</h4>
                <p>${item.price}</p>
              </div>
              <button
                className="cart-btn"
                style={{ background: "#444" }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            Total: $
            {cartItems
              .reduce((acc, item) => acc + item.price, 0)
              .toFixed(2)}
          </div>
          <button className="checkout-btn">Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartModal;
