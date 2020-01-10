import React, { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export default function App() {
  const [ value, setValue ] = useState(null);
  const handleClick = v => {
    setValue(v);
  }
  return (
    <div className="App">
      <Comp1 handleClick={handleClick} />
      <Comp2 value={value} />
    </div>
  );
}
