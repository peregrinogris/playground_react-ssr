/*
 * action types
 */
export const ADD_LIKE = 'ADD_LIKE';
export const CHANGE_VIEW = 'CHANGE_VIEW';


/*
 * action creators
 */
export const addLike = () => ({
  type: ADD_LIKE,
});
export const changeView = view => ({
  view,
  type: CHANGE_VIEW,
});
