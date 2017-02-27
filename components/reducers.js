import * as actions from './actions';

const initialState = {
  likes: [],
  view: 'classic',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_LIKES: {
      const likes = [];
      for (let i = 0; i < action.likes; i += 1) {
        likes.push('like');
      }
      return Object.assign({}, state, {
        likes,
      });
    }
    case actions.ADD_LIKE:
      return Object.assign({}, state, {
        likes: [...state.likes, 'like'],
      });
    case actions.CHANGE_VIEW:
      return Object.assign({}, state, {
        view: action.view,
      });
    default:
      return state;
  }
};
