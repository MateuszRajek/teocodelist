import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';
import CheckboxComponent from './Checkbox';

function User({firstName, lastName, avatar, id, itemsSelected,  setItemsSelected, checked, setChecked  }) {
  const [ischecked, setisChecked] = useState(checked)

  const toggleCheckbox = () => {
    setisChecked(!ischecked)
    setChecked(!ischecked)
      if (!ischecked) {
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
    <CheckboxComponent onClick={toggleCheckbox} checked={ischecked} />
  </ListItem>
  );
}

export default User;
