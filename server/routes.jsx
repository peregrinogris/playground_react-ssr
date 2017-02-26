import AppComponent from '../components/App';
import About from '../components/About';
import Like from '../components/Like';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: Like,
    },
    {
      path: '/about',
      component: About,
    },
  ],
};

export default routes;
