import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { RootRoutes, linkingConfig } from './_root.routes';

export function Routes() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ['todoapp://todoapp'],
        config: {
          screens: linkingConfig,
        },
      }}
    >
      <RootRoutes />
    </NavigationContainer>
  );
}
