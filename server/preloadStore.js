import newStore from '../components/store';
import { addLike } from '../components/actions';

const preloadStore = () => {
  const store = newStore();
  return new Promise((res) => {
    store.dispatch(addLike());
    res(store);
  });
};

export { preloadStore as default };
