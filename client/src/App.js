import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/products/" default/>
          <Route element={<ProductDetail/>} path="/products/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
