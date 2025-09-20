import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Login from './components/login';
import { fetchProducts } from './services/api';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        if (response.data && response.data.length > 0) {
          setPerfumes(response.data);
        } else {
          // If no products from API, use fallback data
          setPerfumes(fallbackPerfumes);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        // Use fallback data if API fails
        setPerfumes(fallbackPerfumes);
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Temporary fallback data in case the API is not ready
  const fallbackPerfumes = [
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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const location = useLocation();

  return (
    <div className="App">
      <Header 
        cart={cart} 
        setIsCartOpen={setIsCartOpen} 
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
        <main>
        <Routes>
          <Route 
            path="/login" 
            element={
              !isAuthenticated ? (
                <Login onLoginSuccess={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route
            path="/"
            element={
              <div className="product-grid">
                {loading ? (
                  <div>Loading products...</div>
                ) : error ? (
                  <div>{error}</div>
                ) : perfumes && perfumes.length > 0 ? (
                  perfumes.map((perfume) => (
                    <ProductCard
                      key={perfume.id}
                      perfume={perfume}
                      cart={cart}
                      setCart={setCart}
                      isAuthenticated={isAuthenticated}
                    />
                  ))
                ) : (
                  <div>No products available</div>
                )}
              </div>
            }
          />
          <Route
            path="/new"
            element={<div className="page-content"><h1>New Arrivals</h1><p>Coming Soon...</p></div>}
          />
          <Route
            path="/collections"
            element={<div className="page-content"><h1>Collections</h1><p>Coming Soon...</p></div>}
          />
          <Route
            path="/bestsellers"
            element={<div className="page-content"><h1>Best Sellers</h1><p>Coming Soon...</p></div>}
          />
          <Route
            path="/gifts"
            element={<div className="page-content"><h1>Gift Sets</h1><p>Coming Soon...</p></div>}
          />
          <Route
            path="/about"
            element={<div className="page-content"><h1>About Us</h1><p>Coming Soon...</p></div>}
          />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
      {isAuthenticated && isCartOpen && (
        <Cart cart={cart} setCart={setCart} setIsCartOpen={setIsCartOpen} />
      )}
      <Footer />
    </div>
  );
}

export default App;
