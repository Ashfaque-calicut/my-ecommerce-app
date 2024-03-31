import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './ProductDetails.css'; 

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart'); 
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <center>
        <h1>Product Details</h1>
      </center>
      <div className="product-details-container">
        <Card className="product-details-card">
          <Card.Img variant="top" src={product.images} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Description: {product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button> 
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductDetails;
