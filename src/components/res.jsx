import React from 'react';
import './res.css'

const Res = ({ res}) => {
 
  return (
    <ul className='txt' >
      {res?res.map(result => (
        <li  style={{ listStyleType: "none" }}>
          <p>{result}</p>
          
        </li>
       
      )):null}
    </ul>
  );
};

export default Res;