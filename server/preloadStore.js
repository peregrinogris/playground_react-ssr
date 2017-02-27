import fetch from 'isomorphic-fetch';

import newStore from '../components/store';
import * as actions from '../components/actions';

const preloadStore = () => {
  const store = newStore();
  return fetch('http://localhost:3003/api/likes')
        .then(response => response.json())
        .then(({ likes }) => {
          store.dispatch(actions.loadLikes(likes));
          store.dispatch(actions.changeView('compact'));
          return store;
        });
};

export { preloadStore as default };
