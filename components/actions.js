import fetch from 'isomorphic-fetch';

/*
 * action types
 */
export const ADD_LIKE = 'ADD_LIKE';
export const LOAD_LIKES = 'LOAD_LIKES';
export const CHANGE_VIEW = 'CHANGE_VIEW';


/*
 * action creators
 */
export const addLike = () => dispatch => (
  fetch('/api/likes', { method: 'POST' })
    .then(() => {
      dispatch({
        type: ADD_LIKE,
      });
    })
);

export const loadLikes = likes => ({
  likes,
  type: LOAD_LIKES,
});

export const changeView = view => ({
  view,
  type: CHANGE_VIEW,
});
