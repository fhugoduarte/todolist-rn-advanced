import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Button } from '~/components/Button';

import { colors } from '~/constants/colors';
import { useAuth } from '~/hooks/useAuth';

import { NavigationItem } from './components/NavigationItem';

import { styles } from './styles';

export function Drawer({ navigation }: DrawerContentComponentProps) {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BorderlessButton onPress={() => navigation.closeDrawer()}>
          <MaterialCommunityIcons name="close" size={26} color={colors.title} />
        </BorderlessButton>

        <Text style={styles.headerTitle}>ToDoApp</Text>
      </View>

      <View style={styles.content}>
        <NavigationItem
          title="Tags"
          description="Gerencie a suas tags"
          iconName="tag"
          navigateTo="Tags"
        />
      </View>

      <Button title="Sair" color="danger" onPress={signOut} />
    </View>
  );
}
