import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.comonent';
import Navigation from './components/navigation/navigation.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
