import React, { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

export default function App() {
  const [ value, setValue ] = useState(null);
  const [ value2, setValue2 ] = useState('');

  const handleClick = v => {
    setValue(v);
  }

  const handleChange = (limit, { target }) => {
    const relimitValue = +(+target.value).toFixed(limit);
    setValue2(
      relimitValue !== +target.value ?
      relimitValue:
      target.value
    );
  }

  return (
    <div className="App">
      <Comp1 handleClick={handleClick} />
      <Comp2 value={value} />

      <input type="number" value={value2} onChange={handleChange.bind(this, 2)} />
    </div>
  );
}
