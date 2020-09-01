/* Watch later reducer */

const initialState = {
  ids: [],
  animes: [],
}

function watchReducer(state = initialState, action) {
  
  switch (action.type) {
    case 'UPDATE':
      if (state.ids.includes(action.payload.id)) {
        var index = state.ids.indexOf(action.payload.id);
        state.ids.splice(index, 1);
        state.animes.splice(index, 1);
      } else {
        state.ids.push(action.payload.id);
        state.animes.push(action.payload.anime);
      }
      return state;
    default:
      return state;
  }

}

export default watchReducer;