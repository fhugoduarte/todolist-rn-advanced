import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '~/services/api';
import type { ITask } from '~/types/entities/Task';

import { QUERY_KEY as TASKS_KEY } from './getTasksQuery';
import { QUERY_KEY as TASK_KEY } from './useGetTaskDetailsQuery';

export interface FormData extends Omit<ITask, 'tag'> {
  tag?: string;
}

async function handleEditTask({ id, ...formData }: FormData) {
  const { data } = await api.put<ITask>(`tasks/${id}`, formData);

  return data;
}

export function useEditTaskMutation({
  onSuccess,
  onMutate,
  ...options
}: UseMutationOptions<ITask, AxiosError, FormData> = {}) {
  const queryClient = useQueryClient();

  return useMutation<ITask, AxiosError, FormData>(handleEditTask, {
    onMutate: async params => {
      await Promise.all([
        queryClient.cancelQueries([TASKS_KEY]),
        queryClient.cancelQueries([TASK_KEY, params.id]),
      ]);

      if (onMutate) {
        onMutate(params);
      }
    },
    onSuccess: async (...params) => {
      await queryClient.invalidateQueries();

      if (onSuccess) {
        onSuccess(...params);
      }
    },
    ...options,
  });
}
