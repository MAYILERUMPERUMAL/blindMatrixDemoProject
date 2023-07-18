import {combineReducers} from 'redux';
import {NavigationReducer} from '../Reducer';

const rootReducer = combineReducers({
  NavigationReducer,
  // Add other reducers here if needed
});

// const rootReducer = (state: any, action: any) => {
//   return reducer(state, action);
// };

export {rootReducer};
