import React, { useState, useEffect } from 'react';
import template from '../assets/health_temp.jpeg.jpg';
function Healthcare() {
  // State to hold healthcare centers data
  const healthcareList = [
    { hospitalName: 'City Hospital', location: 'Downtown', contact: '123-456-7890', service: 'General', coords: { lat: 40.7128, lng: -74.0060 } },
    { hospitalName: 'Dental Clinic', location: 'Uptown', contact: '987-654-3210', service: 'Dental', coords: { lat: 40.7150, lng: -74.0150 } },
    { hospitalName: 'Children’s Hospital', location: 'Eastside', contact: '456-123-7890', service: 'Pediatrics', coords: { lat: 40.7180, lng: -74.0100 } },
    { hospitalName: 'Emergency Care Center', location: 'Westside', contact: '321-654-9870', service: 'Emergency', coords: { lat: 40.7100, lng: -74.0050 } },
  ];

  // State for search functionality and user location
  const [searchService, setSearchService] = useState('General');
  const [filteredHealthcareList, setFilteredHealthcareList] = useState([]);
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  // Function to calculate distance between two coordinates
  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  // Search functionality
  const handleSearch = () => {
    const filteredList = healthcareList.filter(center => center.service === searchService)
      .map(center => ({
        ...center,
        distance: calculateDistance(userLocation.lat, userLocation.lng, center.coords.lat, center.coords.lng)
      }));
    setFilteredHealthcareList(filteredList);
  };

  return (
    <div className="healthcare-container">
    <h1>HealthCare Service</h1>
      <header className='header-temp'>
        <img src={template} alt='' className='icon' />
      </header>
      <p>Details about hospitals and clinics.</p>

      <h2>Search Healthcare Centers by Service</h2>
      <div className="search-section">
        <label>Service Type:</label>
        <select value={searchService} onChange={(e) => setSearchService(e.target.value)}>
          <option value="General">General</option>
          <option value="Emergency">Emergency</option>
          <option value="Dental">Dental</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      <h2>List of Healthcare Centers</h2>
      <ul className="healthcare-list">
        {filteredHealthcareList.length > 0 ? (
          filteredHealthcareList.map((center, index) => (
            <li key={index}>
              <strong>{center.hospitalName}</strong> - {center.location}, Contact: {center.contact}, Service: {center.service}, Distance: {center.distance.toFixed(2)} km
            </li>
          ))
        ) : (
          <p>No healthcare centers found for the selected service.</p>
        )}
      </ul>
    </div>
  );
}

export default Healthcare;
