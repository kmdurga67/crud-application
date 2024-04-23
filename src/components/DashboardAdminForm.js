import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DashboardAdminForm = () => {
  const [foodMenu, setFoodMenu] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodImageUrl, setFoodImageUrl] = useState('');
  const [quantity, setQuantity] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [description, setDescription] = useState('');
  const [addedDate, setAddedDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/foods', {
        foodMenu,
        foodName,
        foodImageUrl,
        quantity,
        oldPrice,
        newPrice,
        description,
        addedDate
      });
      console.log('Food added successfully:', response.data);
      alert('Food added successfully');
      navigate("/food-list");
    } catch (error) {
      console.error('Error adding food:', error);
      alert('Error adding food');
    }
  };

  const handleReset = () => {
    setFoodMenu('');
    setFoodName('');
    setFoodImageUrl('');
    setQuantity('');
    setOldPrice('');
    setNewPrice('');
    setDescription('');
    setAddedDate('');
  };

  return (
    <div className="p-4 mt-6 h-screen">
      <h1 className="text-xl font-bold mb-4">Admin Settings</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="foodMenu">Select Food Menu:</label>
            <select id="foodMenu" value={foodMenu} onChange={(e) => setFoodMenu(e.target.value)} className="w-full p-2 border rounded">
            <option value="Select">Select</option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
            </select>
          </div>
          <div>
            <label htmlFor="foodName">Enter Food Name:</label>
            <input type="text" id="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="foodImageUrl">Enter Food Image URL:</label>
            <input type="text" id="foodImageUrl" value={foodImageUrl} onChange={(e) => setFoodImageUrl(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="quantity">Select Quantity:</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="oldPrice">Enter Old Price:</label>
            <input type="number" id="oldPrice" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="newPrice">Enter New Price:</label>
            <input type="number" id="newPrice" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div className="col-span-2">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="addedDate">Added Date:</label>
            <input type="date" id="addedDate" value={addedDate} onChange={(e) => setAddedDate(e.target.value)} className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add Food</button>
          <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
}

export default DashboardAdminForm;
