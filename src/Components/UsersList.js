import React, { useEffect, useState } from 'react';
import User from './User';

function UsersList({ usersList, searchText }) {
  const [checked, setChecked] = useState(false)
  const [itemsSelected, setItemsSelected] = useState([]);
  const [users, updateUsersList] = useState(usersList);
  // const [filteredUsers, updateFilterUsers] = useState(users)

  const searchUser = () => {
    const searchedUsers = usersList && usersList.filter(user => user.first_name.toLowerCase().includes(searchText) || user.last_name.toLowerCase().includes(searchText))
    updateUsersList(searchedUsers)
  }
  
  useEffect( () => {
    const usersSortedAlphabetically = usersList && usersList.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
    updateUsersList(usersSortedAlphabetically)
  }, [] 
  )

  
  // const usersSortedAlphabetically = usersList && usersList.sort((a, b) => a.last_name > b.last_name ? 1 : -1);
  // const searchedUsers = users && users.filter(user => user.first_name.toLowerCase().includes(searchText) || user.last_name.toLowerCase().includes(searchText))

  //wyświetla listę zanaczonych userów
  console.log(itemsSelected)

  return (
    <>
    {users && users.map(user => {
      const {first_name, last_name, avatar, id, checked} = user
      return (
        <User {...{ key:id, firstName:first_name, lastName:last_name, avatar, id, checked, setChecked, itemsSelected, setItemsSelected }} />
      )
    })}

    {/* {!filteredUsers && <p>Loading...</p>} */}
    {/* {searchText && usersList && filteredUsers.map(user => {
      const {first_name, last_name, avatar, id} = user
      return (
        <User {...{ key:id, firstName:first_name, lastName:last_name, avatar, id, checked, setChecked, itemsSelected, setItemsSelected }} />
      )
    })} */}
    </>
      
  );
}

export default UsersList;
