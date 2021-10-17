import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { colors } from '~/constants/colors';

import { styles } from './styles';

export function StackHeader({ navigation, options }: NativeStackHeaderProps) {
  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container}>
      <BorderlessButton style={styles.backButton} onPress={handleGoBack}>
        <MaterialCommunityIcons
          name="chevron-left"
          color={colors.title}
          size={26}
        />
      </BorderlessButton>

      <Text style={styles.title}>{options.title}</Text>

      <View style={styles.rightContent}>
        {options?.headerRight &&
          options?.headerRight({ tintColor: colors.title })}
      </View>
    </View>
  );
}
