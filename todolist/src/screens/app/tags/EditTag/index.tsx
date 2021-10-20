import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useEffect } from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { DeleteButton } from '~/components/DeleteButton';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import { useDeleteTagMutation } from '~/queries/tags/useDeleteTagMutation';
import {
  FormData,
  useEditTagMutation,
} from '~/queries/tags/useEditTagMutation';
import { useGetTagDetailsQuery } from '~/queries/tags/useGetTagDetailsQuery';
import type { TasksGroupParams } from '~/routes/app/tasks/tasks.group';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksGroupParams, 'EditTask'>;

export function EditTagScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const tagQuery = useGetTagDetailsQuery(id);
  const editTagMutation = useEditTagMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });
  const deleteTagMutation = useDeleteTagMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  const { control, handleSubmit, setValue } = useValidateForm<FormData>({
    schema,
    defaultValues: {
      id: tagQuery.data?.id,
      title: tagQuery.data?.title,
      color: tagQuery.data?.color,
    },
  });

  useEffect(() => {
    if (tagQuery.data) {
      Object.keys(tagQuery.data).forEach(key => {
        const valueKey = key as keyof FormData;

        setValue(valueKey, tagQuery.data[valueKey]);
      });
    }
  }, [tagQuery.data]);

  function handleEditTag(formData: FormData) {
    editTagMutation.mutate(formData);
  }

  function handleDeleteTag() {
    deleteTagMutation.mutate(id);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm
          control={control}
          name="title"
          label="Título"
          editable={tagQuery.isSuccess}
        />
        <InputForm
          control={control}
          name="color"
          label="Cor"
          editable={tagQuery.isSuccess}
        />

        <Button
          title="Editar"
          onPress={handleSubmit(handleEditTag)}
          isLoading={tagQuery.isLoading || editTagMutation.isLoading}
          enabled={tagQuery.isSuccess}
          style={styles.button}
        />

        <DeleteButton
          onPress={handleDeleteTag}
          enabled={tagQuery.isSuccess && !deleteTagMutation.isLoading}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
