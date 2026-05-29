function Cart({ cart, removeFromCart }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className='container'>

      <h1>Your Cart</h1>

      {
        cart.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <div>

            {
              cart.map((item, index) => (
                <div className='cart-item' key={index}>

                  <h3>{item.name}</h3>

                  <p>₹ {item.price}</p>

                  <button onClick={() => removeFromCart(index)}>
                    Remove
                  </button>

                </div>
              ))
            }

            <h2>Total: ₹ {total}</h2>

            <button className='order-btn'>
              Place Order
            </button>

          </div>
        )
      }

    </div>
  );
}

export default Cart;