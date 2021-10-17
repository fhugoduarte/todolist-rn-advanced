import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 12,
  },
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 16,
  },
  description: {
    color: colors.supportText,
    fontSize: 14,
  },
});
