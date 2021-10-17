import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 20,
    alignSelf: 'flex-end',
  },
  button: {
    marginTop: 12,
  },
});
