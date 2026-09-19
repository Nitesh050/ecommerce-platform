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
      price: 749,
      description: "A luxurious blend of jasmine, rose, and lily creating a romantic floral bouquet",
      image: "/images/ChatGPT Image Sep 3, 2025, 10_04_25 PM.png"
    },
    {
      id: 2,
      name: "Ocean Breeze",
      price: 649,
      description: "Refreshing aquatic scent with sea salt notes, capturing the essence of ocean air",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Woody Elegance",
      price: 829,
      description: "Sophisticated blend of sandalwood, cedar, and amber for a timeless appeal",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Citrus Spark",
      price: 599,
      description: "Energizing fusion of lemon, bergamot, and mandarin zest for a bright experience",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Vanilla Dream",
      price: 629,
      description: "Sweet vanilla enriched with warm caramel notes for a comforting embrace",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Mystic Oud",
      price: 1099,
      description: "Intense blend of deep oud wood, musk, and smoky spices for an exotic journey",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 7,
      name: "Lavender Whisper",
      price: 599,
      description: "Soothing lavender enhanced with delicate herbs for perfect relaxation",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 8,
      name: "Spicy Ember",
      price: 729,
      description: "Warm blend of cinnamon, clove, and pepper creating a spicy atmosphere",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 9,
      name: "Amber Nights",
      price: 799,
      description: "Rich combination of amber, vanilla, and tonka bean for a sensual evening",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 10,
      name: "Green Meadow",
      price: 619,
      description: "Fresh blend of cut grass, basil, and mint for a natural outdoor feeling",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 11,
      name: "Rose Gold",
      price: 949,
      description: "Luxurious rose combined with exotic saffron and musk for ultimate sophistication",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 12,
      name: "Coconut Bliss",
      price: 549,
      description: "Sweet coconut milk blended with tropical fruits for a paradise escape",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 13,
      name: "Velvet Musk",
      price: 749,
      description: "Elegant white musk with powdery iris and violet for a soft, luxurious touch",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 14,
      name: "Coffee Noir",
      price: 699,
      description: "Rich blend of roasted coffee, dark cocoa, and vanilla for coffee lovers",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 15,
      name: "Citrus Mint Frost",
      price: 599,
      description: "Refreshing combination of lime, peppermint, and cool menthol for an invigorating boost",
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
