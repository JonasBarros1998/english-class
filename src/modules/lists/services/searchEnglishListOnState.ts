import store from '@pubsub/store';
import {searchOnList} from '@pubsub/lists';

export function searchEnglishListOnState(search: string) {
  const {lists} = store.getState();

  const searchResult = lists.publicEnglishListAll.filter(list => {
    if (list.listTitle.includes(search)) {
      return list;
    }
  });

  store.dispatch(searchOnList(searchResult));
}
