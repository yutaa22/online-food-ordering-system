import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {

    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
  };

  return (
    <BrowserRouter>

      <Navbar cartCount={cart.length} />

      <Routes>

        <Route
          path='/'
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;