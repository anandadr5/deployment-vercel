import React from "react";
import { useParams } from "react-router-dom";

export default function DetailProduct({ tableData }) {
  const { index } = useParams();
  const selectedIndex = parseInt(index, 10);
  const selectedProduct = tableData && tableData[selectedIndex];

  if (!selectedProduct) {
    return <div>Product tidak tersedia</div>;
  }

  return (
    <div className="product-detail">
      <h2>Product Detail</h2>
      <p>Product Name: {selectedProduct.productName}</p>
      <p>Product Category: {selectedProduct.productCategory}</p>
      <p>Product Freshness: {selectedProduct.freshRadio}</p>
      <p>Product Price: {selectedProduct.productPrice}</p>
    </div>
  );
}
