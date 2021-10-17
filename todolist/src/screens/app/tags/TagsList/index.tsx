import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { EmptyItem } from '~/components/EmptyItem';

import type { TagsStackParams } from '~/routes/app/tags/index.stack';
import type { ITag } from '~/types/entities';

import { TagCard } from './components/TagCard';

import { styles } from './styles';

type Props = NativeStackScreenProps<TagsStackParams, 'TagsList'>;

export function TagsListScreen({ navigation }: Props) {
  function handleCreateTag() {
    navigation.navigate('NewTag');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[] as ITag[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TagCard tag={item} />}
        contentContainerStyle={{
          padding: 20,
        }}
        ListEmptyComponent={
          <EmptyItem text="Nenhuma tag cadastrada" onPress={handleCreateTag} />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
