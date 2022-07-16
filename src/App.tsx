import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import Admin from './pages/Admin/Admin';
import Auth from './pages/Auth/Auth';
import Favorites from './pages/Favorites/Favorites';
import Food from './pages/Food/Food';
import Home from './pages/Home/Home';
import OneFoodPage from './pages/OneFoodPage/OneFoodPage';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='orders' element={<Orders />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='login' element={<Auth />} />
        <Route path='registration' element={<Auth />} />
        <Route path='admin' element={<Admin />} />
        <Route path='food' element={<Food />} />
        <Route path='food/:id' element={<OneFoodPage />} />
      </Route>
    </Routes>
  );
}

export default App;
