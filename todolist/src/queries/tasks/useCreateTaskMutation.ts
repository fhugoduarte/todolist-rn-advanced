import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '~/services/api';
import type { ITag, ITask } from '~/types/entities';

import { QUERY_KEY as TASKS_KEY } from './getTasksQuery';

export interface FormData extends Omit<ITag, 'id' | 'done' | 'tag'> {
  tag?: string;
}

async function handleCreateTask(formData: FormData) {
  const { data } = await api.post<ITask>('tasks', formData);

  return data;
}

export function useCreateTaskMutation({
  onMutate,
  onSuccess,
  ...options
}: UseMutationOptions<ITask, AxiosError, FormData> = {}) {
  const queryClient = useQueryClient();

  return useMutation<ITask, AxiosError, FormData>(handleCreateTask, {
    onMutate: async (...params) => {
      await queryClient.cancelQueries([TASKS_KEY]);

      if (onMutate) {
        onMutate(...params);
      }
    },
    onSuccess: async (...params) => {
      await queryClient.invalidateQueries([TASKS_KEY]);

      if (onSuccess) {
        onSuccess(...params);
      }
    },
    ...options,
  });
}
