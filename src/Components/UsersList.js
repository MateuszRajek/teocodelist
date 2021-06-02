import React, { useEffect, useState } from 'react';
import User from './User';

function UsersList({ usersList, searchText }) {
  const [itemsSelected, setItemsSelected] = useState([]);
  const [users, updateUsersList] = useState(usersList);
  const [filteredUsers, setFilteredUsers] = useState(users)
  
  useEffect( () => {
    const usersSortedAlphabetically = usersList && usersList.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
    usersList && usersSortedAlphabetically.forEach(user => {
      user.checked = itemsSelected.includes(user.id) ? true : false
    });
    updateUsersList(usersSortedAlphabetically)
    const searchedUsers = users && users.filter(user => user.first_name.toLowerCase().includes(searchText) || user.last_name.toLowerCase().includes(searchText))
    setFilteredUsers(searchedUsers)
  }, [itemsSelected, usersList, searchText, users] 
  )

  //wyświetla listę zanaczonych userów
  console.log(itemsSelected)

  return (
    <>
    {filteredUsers && filteredUsers.map(user => {
      return (

        <User {...{ key:user.id, user, checked: user.checked ? true : false, itemsSelected, setItemsSelected }} />
      )
    })}
    </> 
  );
}

export default UsersList;
