import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { FormData } from '~/queries/tags/useCreateTagMutation';
import { useCreateTagMutation } from '~/queries/tags/useCreateTagMutation';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'NewTask'>;

export function NewTagScreen({ navigation }: Props) {
  const createTagMutation = useCreateTagMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const { control, handleSubmit } = useValidateForm<FormData>({
    schema,
  });

  function handleCreateTag(formData: FormData) {
    createTagMutation.mutate(formData);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm control={control} name="title" label="Título" />
        <InputForm control={control} name="color" label="Cor" />

        <Button
          title="CRIAR"
          onPress={handleSubmit(handleCreateTag)}
          isLoading={createTagMutation.isLoading}
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
