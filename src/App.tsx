import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import Admin from './pages/Admin/Admin';
import Auth from './pages/Auth/Auth';
import Cart from './pages/Cart/Cart';
import Food from './pages/Food/Food';
import Home from './pages/Home/Home';
import OneFoodPage from './pages/OneFoodPage/OneFoodPage';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='cart/orders' element={<Orders />} />
        <Route path='login' element={<Auth />} />
        <Route path='registration' element={<Auth />} />
        <Route path='admin' element={<Admin />} />
        <Route path='food' element={<Food />} />
        <Route path='food/:id' element={<OneFoodPage />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
