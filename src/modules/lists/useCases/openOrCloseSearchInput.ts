import {openOrClose} from '../services/OpenOrCloseSearchInputComponent';

export function OpenOrCloseSearchInputComponent(isOpen: boolean) {
  if (isOpen === true) {
    openOrClose(false);
  } else {
    openOrClose(true);
  }
}
