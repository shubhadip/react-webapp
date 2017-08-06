import store from '../store';
import { fetchMessage } from '../actions/index';

export function onFeatureEnter() {
  store.dispatch(fetchMessage());
}
