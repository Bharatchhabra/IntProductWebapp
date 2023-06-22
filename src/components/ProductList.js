import React, { useEffect, useState } from "react";

export default function ProductList(openProductDetail, addToFavourites) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
        );
        const data = await response.json();
        console.log(data);
        setProductList(data.products);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log("data", productList);
  return (
    <div>
      <h2>ProductList</h2>
      {productList.length === 0 ? (
        <p>Product not available</p>
      ) : (
        <>
          {productList.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => openProductDetail(product)}>View</button>
              <button onClick={() => addToFavourites(product)}>
                Favourite
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
