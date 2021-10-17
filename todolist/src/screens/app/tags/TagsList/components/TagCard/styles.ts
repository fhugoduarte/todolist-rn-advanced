import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: colors.mainShape,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  colorIndicator: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.title,
    textTransform: 'uppercase',
  },
});
