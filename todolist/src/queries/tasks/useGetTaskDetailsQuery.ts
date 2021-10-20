import type { AxiosError } from 'axios';
import type { UseQueryOptions } from 'react-query';
import { useQuery } from 'react-query';

import { api } from '~/services/api';
import type { ITask } from '~/types/entities/Task';

export const QUERY_KEY = '@get_task_details';

async function fetchTask(id?: string) {
  const { data } = await api.get<ITask>(`tasks/${id}`);

  return data;
}

export function useGetTaskDetailsQuery(
  id?: string,
  options: UseQueryOptions<ITask, AxiosError> = {},
) {
  return useQuery<ITask, AxiosError>(
    [QUERY_KEY, id],
    () => fetchTask(id),
    options,
  );
}
