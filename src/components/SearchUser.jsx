/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

const SearchUser = ({fetchUserData, setloading}) => {

  const [username, setusername] = useState('')

  function passUsername(e) {

    e.preventDefault()
    setloading(true)
    setusername("")
    fetchUserData(username)
    
  }
  
  return (
    <form onSubmit={passUsername} className="w-[300px] sm:w-[400px]">

      <input type="text" className="bg-[rgb(76,40,133)] outline-none text-[16px] w-full rounded-lg p-[16px]" placeholder="Search a Github User" onChange={(e) => setusername(e.target.value)} value={username} autoFocus/>

    </form>
  )
}

export default SearchUser
