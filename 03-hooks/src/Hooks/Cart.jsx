
import React from 'react'
import { useState } from "react";


function App() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h1 id="dc">Cart Quantity: {quantity}</h1>
      <button id="Button" onClick={() => setQuantity(quantity + 1)}>Add</button>
      <button onClick={() => setQuantity(quantity - 1)}>Remove</button>
    </div>
  );
}

export default App;