import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { EmptyItem } from '~/components/EmptyItem';
import { Loader } from '~/components/Loader';
import { TaskCard } from '~/components/TaskCard';

import { useGetCompletedTasksQuery } from '~/queries/tasks/useGetCompletedTasksQuery';
import type { TasksTopParams } from '~/routes/app/tasks/index.top';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksTopParams, 'CompletedTasks'>;

export function CompletedTasksScreen({ navigation }: Props) {
  const tasksQuery = useGetCompletedTasksQuery();

  function handleCreateTask() {
    navigation.navigate('NewTask');
  }

  return (
    <SafeAreaView style={styles.container}>
      {tasksQuery.isLoading && <Loader />}

      {tasksQuery.isSuccess && (
        <FlatList
          data={tasksQuery.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TaskCard task={item} />}
          contentContainerStyle={{
            padding: 20,
          }}
          ListEmptyComponent={
            <EmptyItem
              text="Nenhuma tarefa completa"
              onPress={handleCreateTask}
            />
          }
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </SafeAreaView>
  );
}
