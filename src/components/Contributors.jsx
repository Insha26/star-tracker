import React from 'react';
import Ccard from './Ccard';

export default function Contributors() {
  const items = [
    {
      name: "Insha Yashfeen Ansari",
      photo: require("../assets/insha.jpg"),
    },
    {
      name: "Faiz Ahmad Raza",
      photo: require("../assets/insha.jpg"),
    },
    {
      name: "Hozaifa Shakeel",
      photo: require("../assets/insha.jpg"),
    },
  ];

  return (
    <div className='outer'>
      <div className='inner'>
        {items.map((item, index) => (
          <Ccard
            key={index}
            name={item.name}
            photo={item.photo}
          />
        ))}
      </div>
    </div>
  );
}
