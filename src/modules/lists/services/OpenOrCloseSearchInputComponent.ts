import store from '@pubsub/store';
import {openOrCloseInput} from '@pubsub/reducers/openOrCloseSearchInput';

export function openOrClose(isOpen: boolean) {
  store.dispatch(openOrCloseInput(isOpen));
}
