import {ENVIRONMENT as IS_PRODUCTION} from '@global/constants';

export function selectEnvironment(eventName: string) {
  if(IS_PRODUCTION === false) {
    return `${eventName}_development`;
  }
  
  return eventName;
}
