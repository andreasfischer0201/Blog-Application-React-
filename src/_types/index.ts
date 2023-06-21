import { RootState as RootReducerState } from '../_reducers';
import store from "../_store/store"
export interface RootState extends RootReducerState {}

export type Dispatch = typeof store.dispatch;