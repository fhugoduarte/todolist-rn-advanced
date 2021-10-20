import type { AxiosError } from 'axios';
import type { UseQueryOptions } from 'react-query';

import { api } from '~/services/api';
import type { ITask } from '~/types/entities';

export const QUERY_KEY = '@get_tasks';

async function fetchTasks() {
  const { data } = await api.get<ITask[]>('tasks');

  return data;
}

export const getTasksQuery: UseQueryOptions<ITask[], AxiosError> = {
  queryKey: [QUERY_KEY],
  queryFn: fetchTasks,
};
