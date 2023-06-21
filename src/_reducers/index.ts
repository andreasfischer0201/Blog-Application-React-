import { combineReducers } from 'redux';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
