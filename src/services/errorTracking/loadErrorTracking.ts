import * as Sentry from '@sentry/react-native';
import {DSN_SENTRY} from '@env';


export function loadErrorTracking(): void {
  Sentry.init({ 
    dsn: DSN_SENTRY, 
  });
}


