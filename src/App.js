import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import DashboardAdminForm from './components/DashboardAdminForm';
import "./App.css";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4">
          <Header />
          <Routes>
            <Route path='/' element={<DashboardAdminForm /> } />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
