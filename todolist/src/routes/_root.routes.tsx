import React from 'react';

import { generateLinkingConfig } from '../utils/navigation';
import { AppStack, linkingConfig as appLinks } from './app/index.stack';
import { AuthStack, linkingConfig as authLinks } from './auth/index.stack';

export const linkingConfig = generateLinkingConfig({
  paths: {
    ...appLinks,
  },
});

export function RootRoutes() {
  return <AuthStack />;
}
