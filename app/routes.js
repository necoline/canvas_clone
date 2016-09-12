import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Route, IndexRoute } from 'react-router';
import routes from './routes';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Course from './components/Course';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:id" component={Course} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
