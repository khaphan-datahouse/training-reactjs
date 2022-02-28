import React from 'react';
import './styles.css';
// import {Button} from '@mui/material/';

const Button1 = (props) => {
  return (
    <button {...props}>{props.children}</button>
    // <Button variant="contained" {...props}>{props.children}</Button>
  )
}

export default Button1