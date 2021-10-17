import { StyleSheet, Platform } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.mainShape,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 40,
    height: Platform.select({
      android: 90,
      ios: 120,
    }),
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  backButton: {
    alignItems: 'center',
    width: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.title,
    textTransform: 'uppercase',
  },
  rightContent: {
    alignItems: 'center',
    width: 60,
  },
});
