import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import { Button } from '~/components/Button';
import { InputForm } from '~/components/form/InputForm';

import { useValidateForm } from '~/hooks/useValidateForm';
import type { AuthStackParams } from '~/routes/auth/index.stack';

import { schema } from './schema';

import { styles } from './styles';

type Props = NativeStackScreenProps<AuthStackParams>;

export function SignInScreen({ navigation }: Props) {
  const { control, handleSubmit } = useValidateForm({
    schema,
  });

  function handleSignIn() {
    // do nothing
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <InputForm control={control} name="email" label="E-mail" />
        <InputForm
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
        />

        <Button
          title="ENTRAR"
          onPress={handleSubmit(handleSignIn)}
          style={styles.button}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
