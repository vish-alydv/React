import React from 'react'
import { useState } from "react";


function App() {
  const [dark, setDark] = useState(false);

  return (
    <div >
    <div id="hi" style={{
      height:'100vh',
      backgroundColor: dark? "Black" : "White",
      color: dark? "White": "Black",
    }}>
      <h1>{dark ? "Dark Mode" : "Light Mode"}</h1>
      <button  id="Button" onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
    </div>
  );
}

export default App;
