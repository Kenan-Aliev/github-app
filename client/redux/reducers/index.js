import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import readMe from './readMe'
import repoList from './repoList'
import avatar from './avatar'
import searchrepo from './searchrepo'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    readMe,
    repoList,
    avatar,
    searchrepo
  })

export default createRootReducer
