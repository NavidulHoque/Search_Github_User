/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import SearchUser from './components/SearchUser'
import UserInfo from './components/UserInfo'

function App() {
  const [userData, setuserData] = useState([]) //after api call using fetch userdata will be stored here
  const [loading, setloading] = useState(true) //show loading while handling the promise
  const [repositories, setRepositories] = useState([]) //will store all the repositories of the user

  //init call or calls the function after loading the page
  useEffect(() => {
    
    fetchUserData("navidulhoque")
    
  }, [])
  
  async function fetchUserData(username) {

    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json();

    const responseRepo = await fetch("https://api.github.com/users/" + username + "/repos");
    const repo = await responseRepo.json();

    setuserData(data)
    setRepositories(repo)
    setloading(false)
    
  }

  return (
    <div className='bg-[rgb(42,42,114)] min-h-screen text-white flex flex-col gap-y-7 justify-center items-center'>

      <SearchUser fetchUserData={fetchUserData} setloading={setloading} loading={loading} />

      {loading ? <div className='text-white'>Loading...</div> : userData.message ? <div className='text-white'>Please Enter a valid Username</div> : <UserInfo userData={userData} repositories={repositories} />}

    </div>
  )
}

export default App
