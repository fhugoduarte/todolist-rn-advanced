import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.mainShape,
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: colors.supportText,
    borderRadius: 5,
    paddingHorizontal: 18,
    fontSize: 16,
    color: colors.title,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: colors.title,
  },
  errorText: {
    fontSize: 14,
    color: colors.red,
    marginTop: 6,
    marginBottom: 16,
  },
});
