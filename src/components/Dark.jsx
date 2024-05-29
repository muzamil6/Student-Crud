import React, { useState } from 'react';

export default function Dark() {
  const [mode, setMode] = useState({
    color: "black",
  });
  const myFunc = () => {
    console.log("Function is working");
    setMode({
      color: "white",
      backgroundColor: "black",
    })
  }
  return (
    <div>
      <div className="form-check form-switch">
        <input type="checkbox" style={mode} onClick={() => myFunc()} className='form-check-input' id='switch' />
        <label htmlFor="switch">Enable dark mode</label>
      </div>
    </div>
  )
}
