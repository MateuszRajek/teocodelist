import React, { useState } from 'react';
import { Checkbox } from '@material-ui/core';

function CheckboxComponent({onClick, isChecked}) {
  const [checked, setCheckboxState] = useState(isChecked)

  const toggleCheckbox = () => {
    setCheckboxState(!checked);
    onClick()
  }
 
  return (
    <Checkbox 
      checked={isChecked}
      onChange={toggleCheckbox}
    />
  );
}

export default CheckboxComponent;
