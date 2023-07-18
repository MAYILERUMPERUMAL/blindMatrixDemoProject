import {createStore} from 'redux';
import {rootReducer} from '../RootReducer';

const store = createStore(rootReducer);

export {store};
