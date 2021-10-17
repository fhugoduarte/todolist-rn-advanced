import type { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import type { TasksTopParams } from '~/routes/app/tasks/index.top';
import type { ITask } from '~/types/entities';

import { styles } from './styles';

type Navigation = NavigationProp<TasksTopParams, 'PendingTasks'>;

interface Props {
  task: ITask;
}

export function TaskCard({ task }: Props) {
  const navigation = useNavigation<Navigation>();

  function handleGoToEdit() {
    navigation.navigate('EditTask', { id: task.id });
  }

  return (
    <RectButton style={styles.container} onPress={handleGoToEdit}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {task.title}
          </Text>
        </View>

        {!!task?.tag && (
          <View
            style={[
              styles.tagContainer,
              {
                backgroundColor: `${task.tag.color}80`,
              },
            ]}
          >
            <Text numberOfLines={1} style={styles.tagText}>
              {task.tag.title}
            </Text>
          </View>
        )}
      </View>

      <Text numberOfLines={2} style={styles.description}>
        {task.description}
      </Text>
    </RectButton>
  );
}
