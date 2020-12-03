import axios from 'axios'

const initialState = {
  readMe: ''
}

const README = 'README'

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case README:
      return { ...state, readMe: action.readMe }
    default:
      return state
  }
}
export const getReadme = (username, repositoryName) => {
  return (dispatch) => {
    axios(`https://api.github.com/repos/${username}/${repositoryName}/readme`, {
      headers: { Accept: 'application/vnd.github.VERSION.raw' }
    }).then(({ data }) => dispatch({ type: 'README', readMe: data }))
  }
}
