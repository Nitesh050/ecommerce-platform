import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import PaymentPage from './pages/Payment';
import { useCart } from './hooks/useCart';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user, token, login, logout } = useAuth();
  const {
    cart,
    isCartOpen,
    toggleCart,
    closeCart,
    addToCart,
    removeFromCart,
    mergeGuestCart,
    getTotalPrice,
    getTotalItems
  } = useCart(token);

  const handleLoginSuccess = async (newToken, newUser) => {
    login(newToken, newUser);
    await mergeGuestCart(newToken);
  };

  return (
    <div className="App">
      <Header cartCount={getTotalItems()} toggleCart={toggleCart} user={user} onLogout={logout} />

      <Cart
        isOpen={isCartOpen}
        cart={cart}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
        closeCart={closeCart}
      />

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/payment" element={<PaymentPage cart={cart} getTotalPrice={getTotalPrice} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
