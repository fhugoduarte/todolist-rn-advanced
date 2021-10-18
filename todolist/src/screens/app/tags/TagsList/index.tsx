import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { EmptyItem } from '~/components/EmptyItem';
import { ListLoader } from '~/components/ListLoader';

import { useGetTagsQuery } from '~/queries/useGetTagsQuery';
import type { TagsStackParams } from '~/routes/app/tags/index.stack';

import { TagCard } from './components/TagCard';

import { styles } from './styles';

type Props = NativeStackScreenProps<TagsStackParams, 'TagsList'>;

export function TagsListScreen({ navigation }: Props) {
  const tagsQuery = useGetTagsQuery();

  function handleCreateTag() {
    navigation.navigate('NewTag');
  }

  return (
    <SafeAreaView style={styles.container}>
      {tagsQuery.isLoading && <ListLoader />}

      {tagsQuery.isSuccess && (
        <FlatList
          data={tagsQuery.data.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TagCard tag={item} />}
          contentContainerStyle={{
            padding: 20,
          }}
          ListEmptyComponent={
            <EmptyItem
              text="Nenhuma tag cadastrada"
              onPress={handleCreateTag}
            />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}
