import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainShape,
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 20,
    height: 100,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.title,
  },
  description: {
    fontSize: 14,
    color: colors.text,
  },
  tagContainer: {
    borderRadius: 12,
    alignSelf: 'flex-end',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  tagText: {
    color: colors.title,
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
