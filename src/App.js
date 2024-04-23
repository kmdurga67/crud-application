import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <Routes>
            <Route path='/' element={<Header /> } />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
