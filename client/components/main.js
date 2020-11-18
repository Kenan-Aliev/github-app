import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const text = "User's repository search"
  const [user, setUser] = useState('')
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 text-2xl">{text}</div>
      <input
        className=" py-2 px-4 w-3/12 border border-red-400 rounded  focus:border-blue-500  "
        placeholder="Enter your nickname"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Link
        type="button"
        className="text-center  mt-5 w-3/12 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        to={`/${user}`}
      >
        Find Repo
      </Link>
    </div>
  )
}
export default Main
