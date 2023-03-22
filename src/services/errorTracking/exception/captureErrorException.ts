import * as Sentry from '@sentry/react-native';

export function captureErrorException(error: Error) {
  Sentry.captureException(error);
}