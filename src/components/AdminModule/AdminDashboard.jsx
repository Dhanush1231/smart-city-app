import React, { useState } from 'react';

function AdminDashboard() {
  const [city, setCity] = useState({ name: '', population: '', area: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to add city details
    fetch('http://localhost:8080/admin/city/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(city),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>City Name: </label>
        <input type="text" name="name" onChange={handleInputChange} />
        <label>Population: </label>
        <input type="text" name="population" onChange={handleInputChange} />
        <label>Area (sq km): </label>
        <input type="text" name="area" onChange={handleInputChange} />
        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
