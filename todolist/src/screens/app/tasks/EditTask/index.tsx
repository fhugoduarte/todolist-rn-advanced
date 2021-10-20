import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { DeleteButton } from '~/components/DeleteButton';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import { useDeleteTaskMutation } from '~/queries/tasks/useDeleteTaskMutation';
import {
  useEditTaskMutation,
  FormData,
} from '~/queries/tasks/useEditTaskMutation';
import { useGetTaskDetailsQuery } from '~/queries/tasks/useGetTaskDetailsQuery';
import { useMarkDoneTaskMutation } from '~/queries/tasks/useMarkDoneTaskMutation';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'EditTask'>;

export function EditTaskScreen({ navigation, route }: Props) {
  const { id } = route.params;

  const taskQuery = useGetTaskDetailsQuery(id);

  const editTaskMutation = useEditTaskMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const deleteTaskMutation = useDeleteTaskMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const markDoneMutation = useMarkDoneTaskMutation();

  const { control, handleSubmit, setValue } = useValidateForm<FormData>({
    schema,
    defaultValues: {
      title: taskQuery.data?.title,
      description: taskQuery.data?.description,
      tag: taskQuery.data?.tag?.title,
    },
  });

  useEffect(() => {
    if (taskQuery.data) {
      setValue('title', taskQuery.data?.title);
      setValue('description', taskQuery.data?.description);
      setValue('tag', taskQuery.data?.tag?.title);
    }
  }, [taskQuery.data]);

  function handleEditTask(data: FormData) {
    if (taskQuery.isSuccess) {
      const { tag, ...previousData } = taskQuery.data;

      editTaskMutation.mutate({ ...previousData, ...data });
    }
  }

  function handleDeleteTask() {
    deleteTaskMutation.mutate(id);
  }

  function handleMarkDone() {
    markDoneMutation.mutate(id);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {taskQuery.isSuccess && (
          <View style={styles.buttonContainer}>
            <Button
              title={
                taskQuery.data?.done
                  ? 'Marcar como pendente'
                  : 'Marcar como completa'
              }
              color={taskQuery.data?.done ? 'warning' : 'secondary'}
              onPress={handleMarkDone}
            />
          </View>
        )}

        <InputForm control={control} name="title" label="Título" />
        <InputForm control={control} name="description" label="Descrição" />
        <InputForm control={control} name="tag" label="Tag" />

        <Button
          title="Editar"
          onPress={handleSubmit(handleEditTask)}
          style={styles.button}
        />

        <DeleteButton onPress={handleDeleteTask} />
      </View>
    </TouchableWithoutFeedback>
  );
}
