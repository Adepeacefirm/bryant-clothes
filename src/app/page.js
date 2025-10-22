import React from "react";

const page = async () => {
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const products = await fetchProducts();
  console.log(products);

  return (
    <div>
      <h1>Hello</h1>
      
    </div>
  );
};

export default page;
