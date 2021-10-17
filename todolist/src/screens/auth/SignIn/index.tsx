import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

import type { AuthStackParams } from '~/routes/auth/index.stack';

import { styles } from './styles';

type Props = NativeStackScreenProps<AuthStackParams>;

export function SignInScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn Screen</Text>

      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      />
    </View>
  );
}
