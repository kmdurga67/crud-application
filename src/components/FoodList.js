import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get("http://localhost:3001/foods");
        setFoods(response.data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/foods/${id}`);
      setFoods(foods.filter((food) => food.id !== id));
      alert("Food deleted successfully");
    } catch (error) {
      console.error("Error deleting food:", error);
      alert("Error deleting food");
    }
  };

  return (
    <div className="p-4 mt-6">
      <h1 className="text-xl font-bold mb-4">Manage Food</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b border-gray-400 px-4 py-2">
                Food Menu Name
              </th>
              <th className="border-b border-gray-400 px-4 py-2">Food Name</th>
              <th className="border-b border-gray-400 px-4 py-2">Image</th>
              <th className="border-b border-gray-400 px-4 py-2">qty</th>
              <th className="border-b border-gray-400 px-4 py-2">Old Price</th>
              <th className="border-b border-gray-400 px-4 py-2">New Price</th>
              <th className="border-b border-gray-400 px-4 py-2">
                Description
              </th>
              <th className="border-b border-gray-400 px-4 py-2">Added Date</th>
              <th className="border-b border-gray-400 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.foodName}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.foodMenu}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  <img
                    className="h-16 w-16"
                    src={food.foodImageUrl}
                    alt="food not found"
                  />
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.quantity}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.oldPrice}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.newPrice}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.description}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  {food.addedDate}
                </td>
                <td className="border-b border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDelete(food.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/edit-food/${food.id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FoodList;
