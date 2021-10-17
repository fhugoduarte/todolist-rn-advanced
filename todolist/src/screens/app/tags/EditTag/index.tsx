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

export function EditTagScreen({ route }: Props) {
  const { id } = route.params;

  const { control, handleSubmit } = useValidateForm({
    schema,
  });

  function handleEditTag() {
    // do nothing
  }

  function handleDeleteTag() {
    // do nothing
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm control={control} name="title" label="Título" />
        <InputForm control={control} name="color" label="Cor" />

        <Button
          title="Editar"
          onPress={handleSubmit(handleEditTag)}
          style={styles.button}
        />

        <DeleteButton onPress={handleDeleteTag} />
      </View>
    </TouchableWithoutFeedback>
  );
}
