import store from '@pubsub/store';
import {theUserHaveAccess} from '@pubsub/reducers/accessUserSlice';

export function dispatchAction(value: boolean) {
  store.dispatch(theUserHaveAccess(value));
}
