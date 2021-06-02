import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import CheckboxComponent from './Checkbox';

function User({user, itemsSelected, setItemsSelected, checkboxChecked, setChecked, isUserChecked, updateUserChecked }) {
  const [isChecked, setisChecked] = useState(checkboxChecked)

  const {first_name, last_name, avatar, id} = user


  const toggleCheckbox = () => {
    setisChecked(!isChecked)
    setChecked(!isChecked)
      if (!isChecked) {
        setItemsSelected([
          ...itemsSelected, id
        ])
        updateUserChecked([
          ...isUserChecked, id
        ])
     } else {
      setItemsSelected(itemsSelected.filter(item => item !== id))
      updateUserChecked(isUserChecked.filter(user => user !== id))
     }
  }

  return (
  <ListItem onClick={() => toggleCheckbox()} >
    <ListItemAvatar>
      <Avatar src={avatar ? avatar : 'https://picsum.photos/id/237/200/300'}>
      </Avatar>
    </ListItemAvatar>
    <ListItemText 
    primary={`${first_name} ${last_name}`}
    />
    <CheckboxComponent isChecked={isChecked} />
  </ListItem>
  );
}

export default User;
