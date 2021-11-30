import type { PropsWithChildren } from 'react';
import React from 'react';
import { QueryClientProvider } from 'react-query';

import { testQueryClient } from '../react-query/client';

export function ReactQueryWrapper({ children }: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
