import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RepoList = () => {
  const { userName } = useParams()
  console.log(userName)
  const searchRepo = useSelector((s) => s.searchrepo.searchrepo)
  const repolist = useSelector((s) => s.repoList.repoList)
  const repos = repolist.filter((repo) => repo.name.includes(searchRepo))
  console.log(repos)
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
