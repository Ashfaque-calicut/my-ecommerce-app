import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CartPage.css'; 

function CartPage({ cartItems, removeFromCart }) {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h1 className='text-center' style={{color:"green"}}>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="row">
            {cartItems.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <Card>
                  <Card.Img 
                    variant="top" 
                    src={item.images} 
                    alt={item.title} 
                    className="card-img-top"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <h3 className='text-center'>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;
