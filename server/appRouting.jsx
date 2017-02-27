import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import preloadStore from './preloadStore';

module.exports = (req, res) => {
  // routes is our object of React routes defined above
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      preloadStore().then((store) => {
        // if we got props, that means we found a valid component to render
        // for the given route
        const markup = renderToString(
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>,
        );
        // render `index.ejs`, but pass in the markup we want it to display
        res.render('index', {
          markup,
          preloadedState: JSON.stringify(store.getState()),
        });
      });
    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
};
