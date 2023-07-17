import { useState } from "react";
import ProductCard from "../../components/productCard.jsx/ProductCard";
import { products } from "../../data/data";

export default function ProductGrid() {
  const [items, setItems] = useState(products);
  const filterProducts = (category) => {
    const filteredProducts = products.filter((product) => {
      return product.category === category;
    });
    setItems(filteredProducts);
  };
  return (
    <>
      <div
        className="container mt-5 d-flex justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <button className="btn" onClick={() => setItems(products)}>
          All Products
        </button>
        <button className="btn" onClick={() => filterProducts("chair")}>
          Single Chair
        </button>
        <button className="btn" onClick={() => filterProducts("sofa")}>
          Single Sofa
        </button>
        <button className="btn" onClick={() => filterProducts("bed")}>
          Beds
        </button>
      </div>
      <div className="container-fluid d-flex flex-wrap justify-content-around align-items-center">
        {items.map((product) => {
          return (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </>
  );
}
