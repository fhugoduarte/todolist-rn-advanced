import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { colors } from '~/constants/colors';

import { styles } from './style';

interface Props {
  onPress: () => void;
}

export function AddButton({ onPress }: Props) {
  return (
    <BorderlessButton onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle-multiple-outline"
        color={colors.title}
        size={24}
      />
    </BorderlessButton>
  );
}
