import React from 'react';
import type { RefreshControlProps } from 'react-native';
import { RefreshControl as RnControl } from 'react-native';

import { colors as appColors } from '~/constants/colors';

export function RefreshControl({
  colors: propColors,
  progressBackgroundColor,
  onRefresh,
  ...rest
}: RefreshControlProps) {
  const colors = propColors || [appColors.primary, appColors.secondary];
  const backgroundColor = progressBackgroundColor || appColors.mainShape;

  function handleRefresh() {
    if (onRefresh) {
      onRefresh();
    }
  }

  return (
    <RnControl
      {...rest}
      colors={colors}
      progressBackgroundColor={backgroundColor}
      onRefresh={handleRefresh}
    />
  );
}
