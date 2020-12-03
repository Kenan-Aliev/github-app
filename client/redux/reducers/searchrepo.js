const initialState = {
  searchrepo: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHREPO':
      return { ...state, searchrepo: action.searchrepo }
    default:
      return state
  }
}
