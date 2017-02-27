import newStore from '../components/store';
import * as actions from '../components/actions';

const preloadStore = () => {
  const store = newStore();
  return new Promise((res) => {
    store.dispatch(actions.addLike());
    store.dispatch(actions.changeView('compact'));
    res(store);
  });
};

export { preloadStore as default };
