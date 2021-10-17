import React from 'react';
import { Text, View } from 'react-native';

import { Loader } from '~/components/Loader';

import { styles } from './styles';

export function ListLoader() {
  return (
    <View style={styles.container}>
      <Loader size="large" />

      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}
