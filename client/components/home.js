import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './header'
import ReadMe from './readMe'
import RepoList from './repolist'
import { getRepolist } from '../redux/reducers/repoList'
import { getAvatar } from '../redux/reducers/avatar'
import { getReadme } from '../redux/reducers/readMe'

const Home = () => {
  const dispatch = useDispatch()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (repositoryName) {
      dispatch(getReadme(userName, repositoryName))
    }
    dispatch(getRepolist(userName))
    dispatch(getAvatar(userName))
  }, [userName])
  return (
    <div>
      <Header />
      <Route exact path="/:userName" component={() => <RepoList />} />
      <Route exact path="/:userName/:repositoryName" component={() => <ReadMe />} />
    </div>
  )
}
export default Home
