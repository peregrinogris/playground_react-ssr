import * as actions from './actions';

const initialState = {
  likes: [],
  view: 'classic',
};

export default (state = initialState, action) => {
  switch (action.type) {
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
