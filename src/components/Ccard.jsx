import React from 'react'
import '../components/Document.css';

//yeh wala contributors ka card hai
export default function Ccard({name,photo}) {
  return (
    <div className='ccard'>
       <h2>{name}</h2>
      {photo && <img src={photo} alt={name} className="card-imagee" />}
    </div>
  )
}

