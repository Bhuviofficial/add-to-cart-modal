import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartModal from "./Components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const alreadyAdded = cartItems.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert("Item already added to the cart");
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} openCart={() => setIsCartOpen(true)} />
      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <CartModal
        isOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
