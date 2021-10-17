import { StyleSheet } from 'react-native';

import { colors } from '~/constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainShape,
    flex: 1,
    padding: 24,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.title,
    marginHorizontal: 12,
  },
  content: {
    flex: 1,
    paddingVertical: 24,
  },
});
