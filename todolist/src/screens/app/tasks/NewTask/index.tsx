import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

interface FormData {
  title: string;
  description: string;
  tag?: string;
}

type Props = NativeStackScreenProps<TasksGroupParams, 'NewTask'>;

export function NewTaskScreen({ navigation }: Props) {
  const { control, handleSubmit } = useValidateForm<FormData>({
    schema,
  });

  function handleCreateTask(data: FormData) {
    console.log('DATA', data);
    // do nothing
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
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
