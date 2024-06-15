/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Repository from "./Repository"

const UserInfo = ({ userData, repositories }) => {

  return (

    <div className="bg-gradient-to-r from-[rgb(76,17,172)] to-[rgb(76,40,133)] rounded-2xl p-[48px] flex flex-col md:flex-row gap-x-8 basis-[456px] w-[90vw] md:max-w-[750px]">

      <img src={userData.avatar_url} alt="userPic" className="rounded-full mx-auto h-[150px] w-[150px] border-[10px] border-[rgb(42,42,114)]" />

      <div className="flex flex-col gap-y-2">

        <h1 className="text-[26px] font-semibold text-center md:text-start">{userData.name}</h1>
        <p className="text-[20px] text-center md:text-start">{userData.bio ? userData.bio : "null"}</p>

        <div className="grid grid-cols-3 gap-x-3 sm:gap-x-10">

          <p className="flex sm:flex-row flex-col gap-x-1">{userData.followers}<span className="font-semibold"> Followers</span></p>
          <p className="flex sm:flex-row flex-col gap-x-1">{userData.following}<span className="font-semibold"> Following</span></p>
          <p className="flex sm:flex-row flex-col gap-x-1">{userData.public_repos}<span className="font-semibold"> Repositories</span></p>

        </div>

        <div className="flex flex-wrap gap-4">

          {repositories.map((repository, index) => (
            <Repository key={index} repository={repository} />
          ))}

        </div>

      </div>

    </div>

  )
}

export default UserInfo
