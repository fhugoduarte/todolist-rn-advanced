import '@testing-library/jest-native/extend-expect';
import { setLogger } from 'react-query';

import { server } from './src/mocks/msw/servers/server';
import { testQueryClient } from './src/mocks/react-query/client';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  server.resetHandlers();
  testQueryClient.clear();
});

afterAll(() => {
  server.close();
});

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => null,
});
