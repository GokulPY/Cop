import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Create';
import Read from './Read';
import View from './View';
import Update from './Update';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/View" element={<View />} />
          <Route path="/Read/:id" element={<Read />} />
          <Route path="/Update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
