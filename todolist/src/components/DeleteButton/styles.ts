import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: colors.red,
    fontWeight: 'bold',
  },
});
