
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';
import Header from './Header';
function App() {
  return (
    <CartProvider>
    <Router>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart/:id' element={<Cart/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
