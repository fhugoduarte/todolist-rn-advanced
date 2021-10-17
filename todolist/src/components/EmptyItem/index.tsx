import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React from 'react';
import { Text } from 'react-native';
import type { RectButtonProps } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/constants/colors';

import { styles } from './styles';

interface Props extends RectButtonProps {
  text: string;
}

export function EmptyItem({ text, ...rest }: Props) {
  return (
    <RectButton {...rest} style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle-multiple-outline"
        color={colors.text}
        size={30}
      />

      <Text style={styles.text}>{text}</Text>
    </RectButton>
  );
}
