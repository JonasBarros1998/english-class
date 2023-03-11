import {logEvent} from '@services/analytics/events';

export async function onClickSendForm() {
  logEvent("send_form_help", {
    date: new Date().toISOString()
  });
}
