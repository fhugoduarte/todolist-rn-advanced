import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useMemo } from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';
import type { InfiniteData } from 'react-query';
import { useQueryClient } from 'react-query';

import { EmptyItem } from '~/components/EmptyItem';
import { ListLoader } from '~/components/ListLoader';
import { RefreshControl } from '~/components/RefreshControl';

import type { QueryResult } from '~/queries/tags/useGetTagsQuery';
import {
  useGetTagsQuery,
  QUERY_KEY as TAGS_KEY,
} from '~/queries/tags/useGetTagsQuery';
import type { TagsStackParams } from '~/routes/app/tags/index.stack';
import type { ITag } from '~/types/entities';

import { TagCard } from './components/TagCard';

import { styles } from './styles';

type Props = NativeStackScreenProps<TagsStackParams, 'TagsList'>;

export function TagsListScreen({ navigation }: Props) {
  const queryClient = useQueryClient();

  const tagsQuery = useGetTagsQuery();

  const tags = useMemo(() => {
    const response: ITag[] = [];

    tagsQuery.data?.pages.forEach(page => {
      page.data.forEach(tag => {
        response.push(tag);
      });
    });

    return response;
  }, [tagsQuery.data]);

  function handleCreateTag() {
    navigation.navigate('NewTag');
  }

  function handleGetNextPage() {
    if (!tagsQuery.isFetching && tagsQuery.hasNextPage) {
      tagsQuery.fetchNextPage();
    }
  }

  function handleRefresh() {
    if (tagsQuery.isFetching) {
      return;
    }

    queryClient.setQueriesData<InfiniteData<QueryResult>>([TAGS_KEY], old => {
      return {
        pages: old?.pages.slice(0, 1) || [],
        pageParams: old?.pageParams.slice(0, 1) || [],
      };
    });

    tagsQuery.refetch({ refetchPage: (_, index) => index === 0 });
  }

  return (
    <SafeAreaView style={styles.container}>
      {tagsQuery.isLoading && <ListLoader />}

      {tagsQuery.isSuccess && (
        <FlatList
          data={tags}
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
          onEndReached={handleGetNextPage}
          onEndReachedThreshold={0.2}
          refreshControl={
            <RefreshControl
              refreshing={tagsQuery.isRefetching}
              onRefresh={handleRefresh}
            />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}
