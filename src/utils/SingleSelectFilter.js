import React, { useState } from 'react';
const SingleSelectFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [listVisible, setListVisible] = useState(false);
  
    const destinations = {
        All: 1,
        Basic: 2,
        Single: 1,
        Vip: 1,
    };
  
    const handleFilterChange = (destination) => {
        setSelectedFilter(destination);
    };
  
    const toggleListVisibility = () => {
        setListVisible(!listVisible);
    };
  
    return (
        <div>
            <h4>Điều kiện lọc</h4>
            <button className="btn btn-outline-danger" onClick={toggleListVisibility}>
            {listVisible ? "Ẩn danh sách" : "Hiện danh sách"}
            </button>
  
            {listVisible && (
            <div>
                {Object.keys(destinations).map((destination) => (
                <div key={destination}>
                    <label className="py-2">
                    <input
                        type="radio"
                        name="destination"
                        checked={selectedFilter === destination}
                        onChange={() => handleFilterChange(destination)}
                    />
                    {destination} ({destinations[destination]})
                    </label>
                </div>
                ))}
                <hr />
            </div>
            )}
        </div>
    );
};

export default SingleSelectFilter