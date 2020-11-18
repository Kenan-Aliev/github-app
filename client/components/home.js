import React, { useState, useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import ReadMe from './readMe'

const Home = () => {
  const [repoList, setRepoList] = useState([])
  const [readMe, setReadMe] = useState('')
  console.log (readMe)
  const { userName, repositoryName } = useParams()
  const [avatar, setAvatar] = useState([])
  useEffect(() => {
    if (repositoryName) {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadMe(data))
    }
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setAvatar(data))
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
  }, [userName])
  return (
    <div>
      <Header
        avatar={avatar}
        userName={userName}
        repositoryName={repositoryName}
        repoList={repoList}
      />
      <Route
        exact
        path="/:userName/:repositoryName"
        component={() => <ReadMe readMe={readMe} />}
      />
    </div>
  )
}

Home.propTypes = {}

export default Home
