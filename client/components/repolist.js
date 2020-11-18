import React from 'react'
import { Link } from 'react-router-dom'

const RepoList = ({ userName, repos }) => {
  return (
    <div className="bg-pink-900 flex flex-wrap ">
      {repos.map((repo) => {
        return (
          <div
            className="my-5 mx-5 py-2 px-2  border rounded    leading-none   border-white hover:border-transparent  hover:bg-teal-800 "
            key={repo.id}
          >
            <Link className=" text-white" to={`/${userName}/${repo.name}`}>
              {repo.name}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default RepoList
