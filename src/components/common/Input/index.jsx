import React from 'react';
import './style.css';
// import {TextField} from '@mui/material/';

const Input = ({label, ...props}) => {

  return (
    <div>
      <label>{label}</label>
      <input {...props} ></input>
      {/* <TextField className="input-text" fullWidth id="outlined-basic" label={label} variant="outlined" {...props}/> */}
    </div>
  )
}

export default Input