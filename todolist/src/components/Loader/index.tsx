import React from 'react';
import type { ActivityIndicatorProps } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { colors } from '~/constants/colors';

export function Loader({
  color = colors.primary,
  size = 'small',
  ...rest
}: ActivityIndicatorProps) {
  return <ActivityIndicator color={color} size={size} {...rest} />;
}
