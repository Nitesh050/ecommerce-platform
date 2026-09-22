import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';

function App() {
  const { cart, isCartOpen, toggleCart, addToCart, removeFromCart, getTotalPrice } = useCart();
  const { user, login, logout } = useAuth();

  return (
    <div className="App">
      <Header cartCount={cart.length} toggleCart={toggleCart} user={user} onLogout={logout} />

      <Cart
        isOpen={isCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
      />

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={login} />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
