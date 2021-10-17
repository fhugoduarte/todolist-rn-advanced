import React from 'react';
import { Text } from 'react-native';
import type { RectButtonProps } from 'react-native-gesture-handler';
import { RectButton } from 'react-native-gesture-handler';

import { Loader } from '~/components/Loader';

import { colors } from '~/constants/colors';

import { styles } from './styles';

const buttonColors = {
  primary: colors.primary,
  secondary: colors.secondary,
  success: colors.green,
  warning: colors.orange,
  danger: colors.red,
};

interface Props extends Omit<RectButtonProps, 'onPress'> {
  title: string;
  isLoading?: boolean;
  color?: keyof typeof buttonColors;
  onPress: () => void;
}

export function Button({
  title,
  isLoading,
  color = 'primary',
  style,
  ...rest
}: Props) {
  return (
    <RectButton
      style={[
        styles.container,
        { backgroundColor: buttonColors[color] },
        style,
      ]}
      enabled={!isLoading}
      {...rest}
    >
      {!!title && !isLoading && (
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      )}

      {isLoading && <Loader color={colors.lightText} />}
    </RectButton>
  );
}
