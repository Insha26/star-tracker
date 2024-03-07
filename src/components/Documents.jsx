import React from "react";
import "../components/Document.css";
import Card from "../components/Card";

 
export default function Documents() {
  const items = [
    {
      title: "Stepper Motor",
      image: require("../assets/motor.png"),
      content:
        "In a star tracker system, a stepper motor controls the movement of gears for pitch and yaw to accurately track celestial objects, typically stars. The stepper motor, driven by electrical pulses, precisely adjusts the position of the gears, allowing the star tracker to maintain alignment with specific celestial targets.",
    },
    {
      title: "Arduino Uno",
      image: require("../assets/uno.png"),
      content:
        "The Arduino Uno's role as the master controller involves coordinating the overall functionality of the star tracker, ensuring accurate and synchronized movements. It acts as the brain of the system, processing information, and issuing commands to the stepper motor to maintain precise alignment with celestial targets.",
    },
    {
      title: "Arduino Nano",
      image: require("../assets/nano.png"),
      content:
        "In the star tracker system, the Arduino Nano assumes the role of the master controller. Programmed with specialized code, it receives input from sensors or external sources, processes celestial coordinates, and calculates the necessary adjustments for the stepper motor. As the brain of the system, the Arduino Nano",
    },
    {
      title: "Bearings",
      image: require("../assets/bearing.png"),
      content:
        "In a star tracker system, precision bearings are employed to ensure smooth and reliable movement and rotation. These bearings minimize friction between moving components, facilitating seamless motion in both pitch and yaw directions. "
    },
    {
      title: "3-Axis Gyro",
      image: require("../assets/gyro.png"),
      content:
        "A 3-axis gyro star tracker is a sophisticated device designed for celestial navigation and precise orientation control. Using gyroscopic technology, it measures angular velocity in three dimensions—pitch, yaw, and roll. ",
    },
    {
      title: "RTC",
      image: require("../assets/rtc.png"),
      content:
        "An RTC (Real-Time Clock) module in a star tracker serves the crucial function of providing accurate and stable timekeeping. This module integrates a clock circuit with a backup power source, ensuring continuous operation and preserving time data even in the absence of external power.",
    },
    {
      title: "Jumper Cables",
      image: require("../assets/jumper.webp"),
      content:"Jumper cables are essential components used for making electrical connections between different electronic elements in a circuit."
    },

    {
      title: "Bolts and Nuts",
      image: require("../assets/nuts.png"),
      content:
        "Nuts and bolts are fundamental mechanical fasteners used in a star tracker project to secure and fix components, especially gears, together. They play a crucial role in maintaining structural integrity and stability within the system."
    },
    {
      title: "Laser",
      image: "",
      content:
        "Description of the bearings goes here. Include any relevant details.",
    },
  ];

  return (
    <div className="doc-bg">
      <div className="items-container">
        
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
