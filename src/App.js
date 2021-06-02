import React, { useEffect, useState } from 'react';
import { fetchUsersList } from '../src/requests'
import { Container } from '@material-ui/core';
import UsersList from './Components/UsersList';
import SearchingBar from './Components/SearchingBar';

function App() {
// const [usersList, updateUsersList] = useState()
const [searchInputValue, setSearchInputValue] = useState('')

  // const getAndDisplayUsersList = async () => {
  //   const users = await fetchUsersList()
  //   updateUsersList(users)
  // }

  // useEffect(() => {
  //   getAndDisplayUsersList()}, [])
  

  const usersList = [{avatar: "https://robohash.org/fugiatautemodit.png?size=50x50&set=set1",
email: "skydd0@prnewswire.com",
first_name: "Suzie",
gender: "Female",
id: 1,
last_name: "Kydd",
},
{
avatar: "https://robohash.org/doloribusaspernaturea.png?size=50x50&set=set1",
email: "ffenich1@spotify.com",
first_name: "Finley",
gender: "Male",
id: 2,
last_name: "Fenich",
},
{
avatar: "https://robohash.org/magniestporro.png?size=50x50&set=set1",
email: "jsedgemond2@chron.com",
first_name: "Jim",
gender: "Male",
id: 3,
last_name: "Sedgemond",
}
]

  return (
    <Container maxWidth='md' styles={{paddingTop: '10px'}}>
      <SearchingBar setSearchInputValue={setSearchInputValue} />
      <UsersList usersList={usersList} searchText={searchInputValue} />
    </Container>
  )
}

export default App;
