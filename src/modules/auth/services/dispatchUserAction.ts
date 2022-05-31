import store from '@pubsub/store';
import {theUserHaveAccess} from '@pubsub/reducers/accessUserSlice';
import {addUserDatasOnStorageAsync} from '@pubsub/reducers/userDatasLogged';

/**
 * Dispatch action for especifield the user is authenticate this application or
 * not
 * @param {boolean} value
 * ```true``` = user is authenticate
 *
 * ```false``` = user isn't authenticate
 */
export function dispatchAction(value: boolean) {
  store.dispatch(theUserHaveAccess(value));
}

export function dispatchUserData(userData: string) {
  store.dispatch(addUserDatasOnStorageAsync(userData));
}
