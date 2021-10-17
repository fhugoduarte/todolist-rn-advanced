import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { AddButton } from '~/components/AddButton';
import { StackHeader } from '~/components/StackHeader';
import { generateLinkingConfig } from '~/utils/navigation';

import { EditTagScreen } from '~/screens/app/tags/EditTag';
import { NewTagScreen } from '~/screens/app/tags/NewTag';
import { TagsListScreen } from '~/screens/app/tags/TagsList';

export type TagsStackParams = {
  TagsList: undefined;
  NewTag: undefined;
  EditTag: {
    id: string;
  };
};

export const linkingConfig = generateLinkingConfig<TagsStackParams>({
  paths: {
    TagsList: 'list',
    NewTag: 'new',
    EditTag: 'edit/:id',
  },
});

const Stack = createNativeStackNavigator<TagsStackParams>();

export function TagsStack({
  navigation,
}: NativeStackScreenProps<TagsStackParams>) {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <StackHeader {...props} />,
      }}
    >
      <Stack.Screen
        name="TagsList"
        component={TagsListScreen}
        options={{
          title: 'Tags',
          headerRight: () => (
            <AddButton onPress={() => navigation.navigate('NewTag')} />
          ),
        }}
      />
      <Stack.Screen
        name="NewTag"
        component={NewTagScreen}
        options={{
          title: 'Criar Tag',
        }}
      />
      <Stack.Screen
        name="EditTag"
        component={EditTagScreen}
        options={{
          title: 'Editar Tag',
        }}
      />
    </Stack.Navigator>
  );
}
