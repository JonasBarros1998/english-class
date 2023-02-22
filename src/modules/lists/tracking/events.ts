import { Card, List } from '@global/interfaces/Card'
import {logEvent} from '@services/analytics/events'

export async function onClickListItem(listDetails: List) {
  logEvent('view_item_list', {
    title: listDetails.title,
    id: listDetails.id,
    date: new Date().toISOString(),
  });
}

export async function onLoadContent() {
  logEvent('load_content_list_details', {
    date: new Date().toISOString(),
  });
}

export async function onClickCreateCard(cardId: string) {
  logEvent('create_new_card', {
    cardId: cardId
  });
}

export async function onClickSaveList(params: {title: string, cards: Card[]}) {
  logEvent('save_new_list', {
    title: params.title,
    quantity: params.cards.length,
    date: new Date().toISOString(),
  });
}
