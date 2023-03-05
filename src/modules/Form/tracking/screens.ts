import {screenView} from '@services/analytics/screen/screenView';

export async function onLoad() {
  screenView({
    screenClass: 'HelpForm',
    screenName: 'form_help'
  });
}