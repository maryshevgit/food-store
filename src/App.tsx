import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import Loader from './components/Loader/Loader';
import Home from './pages/Home/Home';

const Cart = lazy(() => import(/*webpackChunkName: "Cart" */ './pages/Cart/Cart'))
const Admin = lazy(() => import(/*webpackChunkName: "Admin" */ './pages/Admin/Admin'))
const Auth = lazy(() => import(/*webpackChunkName: "Auth" */ './pages/Auth/Auth'))
const Food = lazy(() => import(/*webpackChunkName: "Food" */ './pages/Food/Food'))
const OneFoodPage = lazy(() => import(/*webpackChunkName: "OneFoodPage" */ './pages/OneFoodPage/OneFoodPage'))
const Orders = lazy(() => import(/*webpackChunkName: "Orders" */ './pages/Orders/Orders'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
