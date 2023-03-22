jest.mock('@sentry/react-native', () => ({
  Sentry: {
    captureException: jest.fn(),
    captureMessage: jest.fn()
  }
}));
