import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    width: 2,
    height: 12,
  },
});
