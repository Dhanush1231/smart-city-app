import React, { useState } from 'react';

function UserDashboard() {
  const [cityName, setCityName] = useState('');
  const [cityDetails, setCityDetails] = useState(null);

  const handleSearch = () => {
    fetch(`http://localhost:8080/user/city/${cityName}`)
      .then((response) => response.json())
      .then((data) => setCityDetails(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <input
        type="text"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>

      {cityDetails && (
        <div>
          <h3>City Details:</h3>
          <p>Name: {cityDetails.name}</p>
          <p>Population: {cityDetails.population}</p>
          <p>Area: {cityDetails.area} sq km</p>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
