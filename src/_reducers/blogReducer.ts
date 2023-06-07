import { BlogActionTypes, BLOG_ACTION } from '../_types/blogTypes';

interface BlogState {
  blogVariable: string | number;
}

const initialState: BlogState = {
  blogVariable: '',
};

const blogReducer = (state = initialState, action: BlogActionTypes): BlogState => {
  switch (action.type) {
    case BLOG_ACTION:
      return {
        ...state,
        blogVariable: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
