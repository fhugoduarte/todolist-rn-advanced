import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    color: colors.lightText,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
