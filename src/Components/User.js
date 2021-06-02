import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import CheckboxComponent from './Checkbox';

function User({firstName, lastName, avatar, id, itemsSelected,  setItemsSelected, checked, setChecked  }) {
  const [isChecked, setisChecked] = useState(checked)

  const toggleCheckbox = () => {
    setisChecked(!isChecked)
    setChecked(!isChecked)
      if (!isChecked) {
        setItemsSelected([
          ...itemsSelected, id
        ])
     } else {
      setItemsSelected(itemsSelected.filter(item => item !== id))
     }
  }

  return (
  <ListItem onClick={() => toggleCheckbox()} >
    <ListItemAvatar>
      <Avatar src={avatar ? avatar : 'https://picsum.photos/id/237/200/300'}>
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
    primary={`${firstName} ${lastName}`}
    />
    <CheckboxComponent isChecked={isChecked} />
  </ListItem>
  );
}

export default User;
