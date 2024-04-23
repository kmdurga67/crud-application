import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 p-6">
      <h1 className="text-2xl font-bold mb-4">Nandini Dashboard</h1>
      <ul>
        <li><Link to="/nandini">Nandini Dashboard</Link></li>
        <li><Link to="/manage-customers">Manage Customers</Link></li>
        <li><Link to="/add-food-menu">Add Food Menu</Link></li>
        <li><Link to="/add-food">Add Food</Link></li>
        <li><Link to="/add-events">Add Events</Link></li>
        <li><Link to="/add-chefs">Add Chefs</Link></li>
        <li><Link to="/manage-contacts">Manage Contacts</Link></li>
        <li><Link to="/manage-reviews">Manage Reviews</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
