import React from 'react';

import { useAuth } from '~/hooks/useAuth';

import { generateLinkingConfig } from '../utils/navigation';
import { AppStack, linkingConfig as appLinks } from './app/index.stack';
import { AuthStack, linkingConfig as authLinks } from './auth/index.stack';

export const linkingConfig = generateLinkingConfig({
  paths: {
    ...appLinks,
    ...authLinks,
  },
});

export function RootRoutes() {
  const { isSigned } = useAuth();

  if (isSigned) {
    return <AppStack />;
  }

  return <AuthStack />;
}
