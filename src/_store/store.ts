import { createStore } from 'redux';
import rootReducer from '../_reducers';

const store = createStore(rootReducer);

export default store;


