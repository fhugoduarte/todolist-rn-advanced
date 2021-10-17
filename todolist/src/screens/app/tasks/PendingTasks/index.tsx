import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, FlatList, View } from 'react-native';

import { EmptyItem } from '~/components/EmptyItem';
import { TaskCard } from '~/components/TaskCard';

import type { TasksTopParams } from '~/routes/app/tasks/index.top';
import type { ITask } from '~/types/entities';

import { styles } from './styles';

type Props = NativeStackScreenProps<TasksTopParams, 'PendingTasks'>;

export function PendingTasksScreen({ navigation }: Props) {
  function handleCreateTask() {
    navigation.navigate('NewTask');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[] as ITask[]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        contentContainerStyle={{
          padding: 20,
        }}
        ListEmptyComponent={
          <EmptyItem
            text="Nenhuma tarefa pendente"
            onPress={handleCreateTask}
          />
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
