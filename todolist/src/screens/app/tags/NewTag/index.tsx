import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'NewTask'>;

export function NewTagScreen({ navigation }: Props) {
  const { control, handleSubmit } = useValidateForm({
    schema,
  });

  function handleCreateTag() {
    // do nothing
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm control={control} name="title" label="Título" />
        <InputForm control={control} name="color" label="Cor" />

        <Button
          title="CRIAR"
          onPress={handleSubmit(handleCreateTag)}
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
