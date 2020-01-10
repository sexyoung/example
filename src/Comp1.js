import React from 'react';

export default function Comp1({ handleClick }) {
  return (
    <div>
      <button onClick={() => handleClick(1)}>click me 1</button>
      <button onClick={() => handleClick(2)}>click me 2</button>
      <button onClick={() => handleClick(3)}>click me 3</button>
    </div>
  )
}
