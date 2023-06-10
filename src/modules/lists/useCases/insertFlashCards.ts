import { List } from "@global/interfaces/Card";
import { insert } from "@services/firestore/actions/insert";
import { collections } from "@services/firestore/constants/collections";
import store from "@state/redux/store"

export function insertFlashCards(datas: List) {

  insert({
    collections: collections.flashCards,
    datas: formatFlashCardDatas(datas)
  })
    .catch(function(error) {
      console.log(error);
    });
}

function formatFlashCardDatas(datas: List) {
  const [user] = store.getState().user;
  const formatDatas = {
    lists: [datas.id],
    date: formatDate(),
    userId: user.id,
  };

  return formatDatas;
}

function formatDate() {
  const [dateIsoString] = new Date().toISOString().split('T');
  return dateIsoString;
}



