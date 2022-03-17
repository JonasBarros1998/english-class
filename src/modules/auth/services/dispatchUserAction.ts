import store from '@pubsub/store';
import {theUserHaveAccess} from '@pubsub/reducers/accessUserSlice';

/**
 * Dispatch action for especifield the user is authenticate this application
 * not
 * @param {boolean} value
 * ```true``` = user is authenticate
 *
 * ```false``` = user isn't authenticate
 */
export function dispatchAction(value: boolean) {
  store.dispatch(theUserHaveAccess(value));
}
