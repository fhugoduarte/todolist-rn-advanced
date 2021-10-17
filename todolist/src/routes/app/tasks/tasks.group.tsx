import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { StackHeader } from '~/components/StackHeader';
import { generateLinkingConfig } from '~/utils/navigation';

import { EditTaskScreen } from '~/screens/app/tasks/EditTask';
import { NewTaskScreen } from '~/screens/app/tasks/NewTask';

export type TasksGroupParams = {
  NewTask: undefined;
  EditTask: {
    id: string;
  };
};

export const linkingConfig = generateLinkingConfig<TasksGroupParams>({
  baseUrl: 'tasks',
  paths: {
    NewTask: 'new',
    EditTask: 'edit/:id',
  },
});

const Stack = createNativeStackNavigator<TasksGroupParams>();

export function TasksGroup() {
  return (
    <Stack.Group
      screenOptions={{
        header: props => <StackHeader {...props} />,
      }}
    >
      <Stack.Screen
        name="NewTask"
        component={NewTaskScreen}
        options={{
          title: 'Criar Tarefa',
        }}
      />
      <Stack.Screen
        name="EditTask"
        component={EditTaskScreen}
        options={{
          title: 'Editar Tarefa',
        }}
      />
    </Stack.Group>
  );
}
