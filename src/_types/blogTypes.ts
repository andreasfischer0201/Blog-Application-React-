export interface BlogState {
    blogVariable: string | number;
  }
  
  export const BLOG_ACTION = 'BLOG_ACTION';
  
  interface BlogAction {
    type: typeof BLOG_ACTION;
    payload: string | number;
  }
  
  export type BlogActionTypes = BlogAction;
  