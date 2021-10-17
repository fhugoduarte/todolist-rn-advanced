import type { DrawerScreenProps } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

import { AddButton } from '~/components/AddButton';
import { Drawer as DrawerComponent } from '~/components/Drawer';
import { generateLinkingConfig } from '~/utils/navigation';

import { colors } from '~/constants/colors';

import { linkingConfig as tagsLinks, TagsStack } from '../tags/index.stack';
import { linkingConfig as tasksLinks, TasksTopTab } from '../tasks/index.top';
import type { TasksGroupParams } from '../tasks/tasks.group';

export type HomeDrawerParams = TasksGroupParams & {
  Tasks: undefined;
  Tags: undefined;
};

export const linkingConfig = generateLinkingConfig<HomeDrawerParams>({
  paths: {
    Tasks: {
      path: 'tasks',
      exact: true,
      screens: tasksLinks as any,
    },
    Tags: {
      path: 'tags',
      exact: true,
      screens: tagsLinks as any,
    },
  },
});

const Drawer = createDrawerNavigator<HomeDrawerParams>();

export function HomeDrawer({
  navigation,
}: DrawerScreenProps<HomeDrawerParams>) {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen
        name="Tasks"
        component={TasksTopTab}
        options={{
          headerTitle: '',
          headerRight: () => (
            <AddButton onPress={() => navigation.navigate('NewTask')} />
          ),
          drawerType: 'front',
          headerTintColor: colors.title,
        }}
      />
      <Drawer.Screen
        name="Tags"
        component={TagsStack}
        options={{
          swipeEnabled: false,
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
