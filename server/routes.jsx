import AppComponent from '../components/App.jsx';
import About from '../components/About.jsx';
import Like from '../components/Like.jsx';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: Like
    },
    {
      path: '/about',
      component: About
    }
  ]
}

export { routes };
