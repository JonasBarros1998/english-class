import * as Sentry from '@sentry/react-native';

export function captureException(error: Error) {
  Sentry.captureMessage(error.message);
}
