import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClientProvider } from 'react-query';

import { useCreateQueryClient } from '~/hooks/useCreateQueryClient';

import { AuthProvider } from './providers/AuthProvider';
import { Routes } from './routes';

export function Main() {
  const client = useCreateQueryClient();

  return (
    <QueryClientProvider client={client}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </QueryClientProvider>
  );
}
