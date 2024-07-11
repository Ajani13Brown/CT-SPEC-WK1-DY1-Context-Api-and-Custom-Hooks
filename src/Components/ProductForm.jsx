import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInventory from '../Hooks/useInventory'; // Adjust the path as per your file structure

const ProductForm = () => {
  const { addProduct } = useInventory();
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(newProduct);
    setNewProduct({
      title: '',
      price: '',
      description: '',
      image: '',
      category: '',
    });
  };

  return (
    <>
      <h2>Add Product</h2>
      <div className='container'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
      </div>
    </>
  );
};

export default ProductForm;