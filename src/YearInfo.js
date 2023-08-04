import React, { useState } from 'react';

const YearInfo = () => {
  const [message, setMessage] = useState('Initial message');

  const myfunfor1st = () => {
    setMessage("I am in my 1st year studying AI&DS dept");
  };

  const myfunfor2nd = () => {
    setMessage("I am in my 2nd year studying AI&DS dept");
  };

  const myfunfor3rd = () => {
    setMessage("I am in my 3rd year studying AI&DS dept");
  };

  const myfunfor4th = () => {
    setMessage("I am in my 4th year studying AI&DS dept");
  };

  return (
    <div>
      <button onClick={myfunfor1st}>Click for 1st Year</button>
      <button onClick={myfunfor2nd}>Click for 2nd Year</button>
      <button onClick={myfunfor3rd}>Click for 3rd Year</button>
      <button onClick={myfunfor4th}>Click for 4th Year</button>

      <p id="hello">{message}</p>
    </div>
  );
};

export default YearInfo;
