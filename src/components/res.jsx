import React from 'react';
import './res.css'

const Res = ({ res}) => {
 
  return (
    <ul className='txt' >
      {res.map(result => (
        <li  style={{ listStyleType: "none" }}>
          <p>{result}</p>
          
        </li>
       
      ))}
    </ul>
  );
};

export default Res;