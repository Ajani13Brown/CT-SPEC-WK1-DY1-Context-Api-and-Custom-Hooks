import React, { useEffect } from 'react';
import useInventory from '../Hooks/useInventory';

const ProductList = () => {
  const { products, fetchProducts, removeProduct } = useInventory();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRemove = async (productId) => {
    await removeProduct(productId);
  };

  return (
    <>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;