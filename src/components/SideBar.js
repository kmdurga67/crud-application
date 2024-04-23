import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/4 p-10">
      <h1 className="text-2xl font-bold mb-16">Nandini Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link to="/nandini">Nandini Dashboard</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/manage-customers">Manage Customers</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/add-food-menu">Add Food Menu</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/add-food">Add Food</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/add-events">Add Events</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/add-chefs">Add Chefs</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/manage-contacts">Manage Contacts</Link>
          <hr className="my-4 border-gray-600" />
        </li>
        <li>
          <Link to="/manage-reviews">Manage Reviews</Link>
          <hr className="my-4 border-gray-600" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
