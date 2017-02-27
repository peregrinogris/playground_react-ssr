import * as actions from './actions';

const initialState = {
  likes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_LIKE:
      return Object.assign({}, state, {
        likes: [...state.likes, 'like'],
      });
    default:
      return state;
  }
};
