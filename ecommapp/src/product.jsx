import App from './App.jsx'

import "./Products.css";

function Products() {
  const products = [
    {
      id: 1,
      name: "Winter Jacket",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80",
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    },
    {
      id: 3,
      name: "Modern Hoodie",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80",
    },
  ];

  return (
    <div className="products-container">
      <h1 className="page-title">Exclusive Winter Collection</h1>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt="" />

            <h2>{p.name}</h2>
            <p>₹ {p.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
