import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '~/services/api';
import type { ITask } from '~/types/entities/Task';

import { QUERY_KEY as TASKS_KEY } from './getTasksQuery';
import { QUERY_KEY as TASK_KEY } from './useGetTaskDetailsQuery';

interface Context {
  previousTask?: ITask;
}

async function handleMarkDone(id: string) {
  const { data } = await api.patch<ITask>(`tasks/${id}/check`);

  return data;
}

export function useMarkDoneTaskMutation({
  onSuccess,
  onMutate,
  onError,
  ...options
}: UseMutationOptions<ITask, AxiosError, string, Context> = {}) {
  const queryClient = useQueryClient();

  return useMutation<ITask, AxiosError, string, Context>(handleMarkDone, {
    onMutate: async taskId => {
      await Promise.all([
        queryClient.cancelQueries([TASKS_KEY]),
        queryClient.cancelQueries([TASK_KEY, taskId]),
      ]);

      const previousTask = queryClient.getQueryData<ITask>([TASK_KEY, taskId]);

      queryClient.setQueryData<ITask | undefined>([TASK_KEY, taskId], old => {
        if (!old) {
          return undefined;
        }

        return {
          ...old,
          done: !old.done,
        };
      });

      if (onMutate) {
        onMutate(taskId);
      }

      return { previousTask };
    },
    onSuccess: async (...params) => {
      await queryClient.invalidateQueries([TASKS_KEY]);

      if (onSuccess) {
        onSuccess(...params);
      }
    },
    onError: (error, taskId, ctx) => {
      if (ctx?.previousTask) {
        queryClient.setQueryData<ITask>([TASK_KEY, taskId], ctx.previousTask);
      }

      if (onError) {
        onError(error, taskId, ctx);
      }
    },
    ...options,
  });
}
