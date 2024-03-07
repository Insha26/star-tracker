import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import video3 from '../assets/vx.mp4'

import Navbar from './Navbar'




export default function Main() {
  return (
    <>
   
    
    <div className='main'>
   
    <div className='videos-container'>
    
    <video src={video2} autoPlay loop muted className='video'/>
    <video src={video1} autoPlay loop muted className='video'/>
    <video src={video3} autoPlay loop muted className='video'/>

   



     
    </div>
     
      <div className='content'>
      <h1 style={{ fontSize: '100px', fontFamily: "'Poppins', sans-serif" }}>Arduino-Star-Tracker</h1>
<p style={{ fontSize: '40px', fontFamily: "'Poppins', sans-serif" }}>Navigate the Cosmos, One Star at a Time</p>




      </div>
        
    </div>
    
    </>
  )
}
