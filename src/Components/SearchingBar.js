import { TextField } from '@material-ui/core';
import React from 'react';

function SearchingBar({ setSearchInputValue }) {

  const onInputChange = event => {
    setSearchInputValue(event.target.value.toLowerCase())
  }

  return (
    <TextField id="outlined-basic" label="Search User" variant="outlined" onChange={onInputChange} />
  );
}

export default SearchingBar;
