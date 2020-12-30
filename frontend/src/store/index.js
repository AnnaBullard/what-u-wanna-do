import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import ExperiencesReducer from './experiences';
import SingleExperienceReducer from './singleExperience';
import BookingsReducer from './bookings';

const rootReducer = combineReducers({
  session: sessionReducer,
  experiences: ExperiencesReducer,
  singleExperience: SingleExperienceReducer,
  bookings: BookingsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
