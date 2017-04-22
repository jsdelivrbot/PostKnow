//React modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route modules
import App from './src/components/app/app';
import Search from './src/smart_components/search/SearchComponent';

//Route paths
export default(
  <Route path={'/'} component={App}>
    <IndexRoute component={Search}/>
  </Route>
)


