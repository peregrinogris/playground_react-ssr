import AppComponent from '../src/components/app.jsx';
import About from '../src/components/About.jsx';
import Like from '../src/client/app/Like.jsx';

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
