import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { generateLinkingConfig } from '~/utils/navigation';

import { HomeDrawer, linkingConfig as homeLinks } from './home/index.drawer';
import { TasksGroup, linkingConfig as tasksLinks } from './tasks/tasks.group';

export const linkingConfig = generateLinkingConfig({
  paths: {
    Home: {
      path: 'home',
      screens: homeLinks,
    },
    ...tasksLinks,
  },
});

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeDrawer}
        options={{
          headerShown: false,
        }}
      />

      {TasksGroup()}
    </Stack.Navigator>
  );
}
