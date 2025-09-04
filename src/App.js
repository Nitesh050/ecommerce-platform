import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const perfumes = [
    {
      id: 1,
      name: "Floral Paradise",
      price: 89.99,
      description: "A beautiful blend of jasmine and rose",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Ocean Breeze",
      price: 79.99,
      description: "Fresh and invigorating aquatic scent",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Woody Elegance",
      price: 99.99,
      description: "Sophisticated blend of cedar and sandalwood",
      image: "https://via.placeholder.com/150"
    }
  ];

  const addToCart = (perfume) => {
    setCart([...cart, perfume]);
  };

  const removeFromCart = (perfumeId) => {
    setCart(cart.filter((item, index) => index !== perfumeId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <Header 
        cartCount={cart.length} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
      />

      <Cart 
        isOpen={isCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      <main className="product-grid">
        {perfumes.map((perfume) => (
          <ProductCard
            key={perfume.id}
            product={perfume}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
