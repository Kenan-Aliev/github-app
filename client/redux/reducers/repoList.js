import axios from 'axios'

const initialState = {
  repoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'REPOLIST':
      return { ...state, repoList: action.repoList }
    default:
      return state
  }
}

export const getRepolist = (username) => {
  return (dispatch) => {
    axios(`https://api.github.com/users/${username}/repos`).then(({ data }) =>
      dispatch({ type: 'REPOLIST', repoList: data })
    )
  }
}
