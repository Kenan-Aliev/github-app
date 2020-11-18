import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import RepoList from './repolist'

const Header = ({ repoList, avatar, userName, repositoryName }) => {
  const [searchRepo, setSearchRepo] = useState('')
  const repos = repoList.filter((repo) => repo.name.includes(searchRepo))
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight uppercase ">{userName}</span>
          <span className="font-semibold text-xl tracking-tight ml-5">
            <img className="w-10 h-10 rounded-full" src={avatar.avatar_url} alt="avatar" />
          </span>
        </div>
        <div className="w-full block justify-end flex-grow lg:flex lg:items-center lg:w-auto">
          <div>
            { userName && !repositoryName && (
              <input
                placeholder="Search a repo"
                className="mr-8 placeholder-gray-600 focus:placeholder-gray-500 border-b text-white border-white outline-none border-current bg-transparent"
                type="text"
                value={searchRepo}
                onChange={(e) => setSearchRepo(e.target.value)}
              />
            )}
            <Link
              to="/"
              s
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mr-4 lg:mt-0"
            >
              Back to Main
            </Link>

            {repositoryName && (
              <Link
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                to={`/${userName}`}
              >
                Back to Repo
              </Link>
            )}
          </div>
        </div>
      </nav>
      <Route
        exact
        path="/:userName"
        component={() => <RepoList userName={userName} repos={repos} />}
      />
    </div>
  )
}
export default Header
