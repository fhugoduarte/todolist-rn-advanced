import React from 'react';
import { Text } from 'react-native';
import type { BorderlessButtonProps } from 'react-native-gesture-handler';
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from './styles';

export function DeleteButton(props: BorderlessButtonProps) {
  return (
    <BorderlessButton {...props} style={styles.container}>
      <Text style={styles.text}>Excluir</Text>
    </BorderlessButton>
  );
}
