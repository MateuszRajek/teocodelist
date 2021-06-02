import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

function CheckboxComponent({ isChecked }) {
  const [checked, setCheckboxState] = useState(isChecked)

  const toggleCheckbox = () => {
    setCheckboxState(!checked);
  }
 
  return (
    <Checkbox 
      checked={isChecked}
      onChange={toggleCheckbox}
    />
  );
}

export default CheckboxComponent;
