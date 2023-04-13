// Component.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:1337/type');
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {/* {data.map((item, index) => (
          <li key={index}>
            {item.name}
            {item.completed === false && <span> - Completed: No</span>}
          </li>
        ))} */}
        <li>item: {data.TypeCompTest.ttext}</li>
      </ul>
    </div>
  );
};

export default Component;
