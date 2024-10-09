import React from 'react';

const PublicTransportation = () => {
    return (
        <div className='public'>
            <label htmlFor="servicesSelect">Select the Services</label>
            <select id="servicesSelect">
                <option value="bus">Bus Service</option>
                <option value="train">Train Service</option>
            </select>
        </div>
    );
};

export default PublicTransportation;
