import React, { useEffect, useState } from 'react';
import { fetchUsersList } from '../src/requests'
import { Container } from '@material-ui/core';
import UsersList from './Components/UsersList';
import SearchingBar from './Components/SearchingBar';

function App() {
const [usersList, updateUsersList] = useState()
const [searchInputValue, setSearchInputValue] = useState('')

  const getAndDisplayUsersList = async () => {
    const users = await fetchUsersList()
    updateUsersList(users)
  }

  useEffect(() => {
    getAndDisplayUsersList()}, [])

  return (
    <Container maxWidth='md' styles={{paddingTop: '10px'}}>
      <SearchingBar setSearchInputValue={setSearchInputValue} />
      <UsersList usersList={usersList} searchText={searchInputValue} />
    </Container>
  )
}

export default App;
