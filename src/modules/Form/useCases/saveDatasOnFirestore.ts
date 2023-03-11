import { FormHelp } from '@global/interfaces/FormHelp';
import { captureErrorException } from '@services/errorTracking/exception/captureErrorException';
import {insert} from '@services/firestore/actions/insert';
import {collections} from '@services/firestore/constants/collections';

export async function saveDataOnFirestore(datas: FormHelp) {
  return insert({
    collections:  collections.formHelp,
    datas: datas
  }).catch(function(error: Error) {
      captureErrorException(new Error(error.message))
      throw error.message;
    });
}

