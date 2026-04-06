import React from 'react'
import './Cars.css'

const carData = [
  { id: 1, name: 'Ferrari Roma', price: '₹3.5 Cr', tag: 'Sports', emoji: '🔴' },
  { id: 2, name: 'Lamborghini Urus', price: '₹4.0 Cr', tag: 'SUV', emoji: '🟡' },
  { id: 3, name: 'Porsche 911', price: '₹2.2 Cr', tag: 'Classic', emoji: '⚪' },
  { id: 4, name: 'BMW M5', price: '₹1.6 Cr', tag: 'Sedan', emoji: '🔵' },
  { id: 5, name: 'Mercedes AMG GT', price: '₹2.8 Cr', tag: 'Sports', emoji: '⚫' },
  { id: 6, name: 'Audi R8', price: '₹3.1 Cr', tag: 'Sports', emoji: '🟠' },
]

const Cars = () => {
  return (
    <section className="cars-section" id="cars">
      <h2>Our Collection</h2>
      <p className="subtitle">Handpicked premium vehicles</p>
      <div className="cars-grid">
        {carData.map(car => (
          <div className="car-card" key={car.id}>
            <div className="car-emoji">{car.emoji}</div>
            <span className="car-tag">{car.tag}</span>
            <h3>{car.name}</h3>
            <p className="car-price">{car.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cars