import React, { useState } from 'react';
import "./CarList.css";

function CarList() {
  const [cars, setCars] = useState([{ name: "Ford", image: "ford.jpeg" }]);

  function AddCar() {
    let carName = document.getElementById('carName').value;
    let carImage = document.getElementById('carImage').value;

    if (carName !== '' && carImage !== '') {
      setCars([...cars, { name: carName, image: carImage }]);
      document.getElementById('carName').value = '';
      document.getElementById('carImage').value = '';
    } else {
      alert('Please enter both car name and image URL');
    }
  }

  function DeleteCar() {
    setCars(cars.slice(0, -1));
    
  }

  return (
    <div>
      <center>
      <div className="container">
     
      
        <input type='text' id='carName' placeholder='Enter car name'></input>
        <br />
        <input type='text' id='carImage' placeholder='Enter image URL'></input>
        <br />
        <button onClick={AddCar} className="btn add-btn">Add Car</button>
        <button onClick={DeleteCar} className="btn add-btn">Delete Last Car</button>
        </div>

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {cars.map((car, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              <p><strong>{car.name}</strong></p>
              <img src={car.image} alt={car.name} style={{ width: '200px', height: 'auto' }} />
            </li>
          ))}
        </ul>

       
      </center>
    </div>
  );
}

export default CarList;
