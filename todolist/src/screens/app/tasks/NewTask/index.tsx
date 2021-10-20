import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { FormData } from '~/queries/tasks/useCreateTaskMutation';
import { useCreateTaskMutation } from '~/queries/tasks/useCreateTaskMutation';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'NewTask'>;

export function NewTaskScreen({ navigation }: Props) {
  const createTaskMutation = useCreateTaskMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const { control, handleSubmit } = useValidateForm<FormData>({
    schema,
  });

  function handleCreateTask(data: FormData) {
    createTaskMutation.mutate(data);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm control={control} name="title" label="Título" />
        <InputForm control={control} name="description" label="Descrição" />
        <InputForm control={control} name="tag" label="Tag" />

        <Button
          title="CRIAR"
          onPress={handleSubmit(handleCreateTask)}
          isLoading={createTaskMutation.isLoading}
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
