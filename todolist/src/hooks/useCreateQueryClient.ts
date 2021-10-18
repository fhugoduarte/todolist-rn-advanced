import type { AxiosError } from 'axios';
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import { QueryClient } from 'react-query/';

import { useNetworkInfo } from './useNetworkInfo';

LogBox.ignoreLogs(['Setting a timer for a long period']);

const ONE_MINUTE = 6000;

const client = new QueryClient();

export function useCreateQueryClient() {
  const { isGreatConnection } = useNetworkInfo();

  useEffect(() => {
    client.setDefaultOptions({
      queries: {
        retry: (failureCount, err) => {
          const error = err as AxiosError;

          if (error.isAxiosError && error.response) {
            const errorStatus = error.response?.status;

            const isErrorWithinRequestErrorsRange =
              errorStatus >= 400 && errorStatus < 500;

            if (isErrorWithinRequestErrorsRange) {
              return false;
            }
          }

          const maxRetries = isGreatConnection ? 2 : 0;

          return failureCount <= maxRetries;
        },
        staleTime: isGreatConnection ? ONE_MINUTE : ONE_MINUTE * 3,
      },
    });
  }, [isGreatConnection]);

  return client;
}
