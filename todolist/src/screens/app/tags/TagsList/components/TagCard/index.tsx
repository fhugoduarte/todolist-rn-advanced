import { useNavigation } from '@react-navigation/core';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import type { TagsStackParams } from '~/routes/app/tags/index.stack';
import type { ITag } from '~/types/entities';

import { styles } from './styles';

type Navigation = NativeStackNavigationProp<TagsStackParams, 'TagsList'>;

interface Props {
  tag: ITag;
}

export function TagCard({ tag }: Props) {
  const navigation = useNavigation<Navigation>();

  return (
    <RectButton
      style={styles.container}
      onPress={() => {
        navigation.navigate('EditTag', { id: tag.id });
      }}
    >
      <View style={[styles.colorIndicator, { backgroundColor: tag.color }]} />

      <Text style={styles.title}>{tag.title}</Text>
    </RectButton>
  );
}
