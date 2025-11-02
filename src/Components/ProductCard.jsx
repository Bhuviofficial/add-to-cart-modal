const ProductCard = ({ product, addToCart }) => {
  const rating = product.rating?.rate || 0;

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-content">
        <h3>{product.title.slice(0, 40)}...</h3>

       
        <div className="rating">
          {"★".repeat(Math.round(rating))}
          {"☆".repeat(5 - Math.round(rating))}
          <span style={{ marginLeft: "5px", color: "#555", fontSize: "14px" }}>
            ({rating.toFixed(1)})
          </span>
        </div>

        <p className="price">${product.price}</p>

        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
