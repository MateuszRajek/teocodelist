import React, { useState } from 'react';
import User from './User';

function UsersList({ usersList, searchText }) {
  const [checked, setChecked] = useState(false)
  const [itemsSelected, setItemsSelected] = useState([]);

  const usersSortedAlphabetically = usersList.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
  const searchedUsers = usersSortedAlphabetically.filter(user => user.first_name.toLowerCase().includes(searchText) || user.last_name.toLowerCase().includes(searchText))

  //wyświetla listę zanaczonych userów
  console.log(itemsSelected)
  

  return (
    <>
    {!searchText && usersList.map(user => {
      const {first_name, last_name, avatar, id} = user
      return (
        <User {...{ key:id, firstName:first_name, lastName:last_name, avatar, id, checked, setChecked, itemsSelected, setItemsSelected }} />
      )
    })}
    {searchText && searchedUsers.map(user => {
      const {first_name, last_name, avatar, id} = user
      return (
        <User {...{ key:id, firstName:first_name, lastName:last_name, avatar, id, checked, setChecked, itemsSelected, setItemsSelected }} />
      )
    })}
    </>
      
  );
}

export default UsersList;
