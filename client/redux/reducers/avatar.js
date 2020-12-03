import axios from 'axios'

const initialState = {
  avatar: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AVATAR':
      return { ...state, avatar: action.avatar }
    default:
      return state
  }
}

export const getAvatar = (username) => {
  return (dispatch) => {
    axios(`https://api.github.com/users/${username}`).then(({ data }) =>
      dispatch({ type: 'AVATAR', avatar: data })
    )
  }
}
