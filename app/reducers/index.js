// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import preachings from './preachings'
import preaching from './preaching'
import title from './title'

const rootReducer = combineReducers({
  counter,
  preachings,
  preaching,
  title,
  router,
});

export default rootReducer;
