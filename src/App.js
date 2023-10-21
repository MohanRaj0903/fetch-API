import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        // Set the fetched items to the state
        setItems(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []); // The empty array [] ensures that this effect runs once after the initial render

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.userId}>{item.id} {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
