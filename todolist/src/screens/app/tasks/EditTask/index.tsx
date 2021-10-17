import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { DeleteButton } from '~/components/DeleteButton';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'EditTask'>;

export function EditTaskScreen({ navigation, route }: Props) {
  const { id } = route.params;

  const { control, handleSubmit } = useValidateForm({
    schema,
  });

  function handleEditTask() {
    // do nothing
  }

  function handleDeleteTask() {
    // do nothing
  }

  function handleMarkDone() {
    // do nothing
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Marcar como completa"
            color="secondary"
            onPress={handleMarkDone}
          />
        </View>

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
