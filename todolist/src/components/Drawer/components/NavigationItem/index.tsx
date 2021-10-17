import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { colors } from '~/constants/colors';
import type { HomeDrawerParams } from '~/routes/app/home/index.drawer';

import { styles } from './styles';

interface Props {
  title: string;
  description: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  navigateTo: keyof HomeDrawerParams;
}

type Navigation = NavigationProp<HomeDrawerParams>;

export function NavigationItem({
  title,
  description,
  iconName,
  navigateTo,
}: Props) {
  const navigation = useNavigation<Navigation>();

  function handleNavigate() {
    navigation.navigate(navigateTo);
  }

  return (
    <RectButton style={styles.container} onPress={handleNavigate}>
      <MaterialCommunityIcons
        name={iconName}
        color={colors.primary}
        size={16}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </RectButton>
  );
}
