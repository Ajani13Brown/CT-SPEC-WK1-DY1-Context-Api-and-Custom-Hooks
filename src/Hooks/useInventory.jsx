import { useEffect, useState } from 'react'

const useInventory = () => {
    const [products,setProducts] = useState([])

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const addProduct = async (newProduct) => {
      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProduct),
        });
        if (!response.ok) {
          throw new Error('Failed to add product');
        }
        const addedProduct = await response.json();
        setProducts([...products, addedProduct]);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    
    const removeProduct = async (productId) => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete product');
        }
        setProducts(products.filter(product => product.id !== productId));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    };
  
    return {
      products,
      fetchProducts,
      addProduct,
      removeProduct,
    };
  };
  
  export default useInventory;