import React from 'react';
import menuData from './menuData.json'; // Import JSON data

const Menu = () => {
  // Map through each category and its products
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Coffee Shop Menu</h1>
      {Object.keys(menuData).map((categoryKey) => (
        <div key={categoryKey} style={{ marginBottom: '30px' }}>
          <h2>{categoryKey.replace('_', ' ').toUpperCase()}</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {menuData[categoryKey].map((item) => (
              <li key={item.id} style={{ margin: '10px 0' }}>
                <span style={{ fontWeight: 'bold' }}>{item.name_en} / {item.name_tr}</span> 
                <span style={{ marginLeft: '10px' }}> - {item.price} TL</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
