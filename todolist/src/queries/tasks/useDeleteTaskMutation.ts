import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '~/services/api';
import type { ITask } from '~/types/entities';

import { QUERY_KEY as TASKS_KEY } from './getTasksQuery';
import { QUERY_KEY as TASK_KEY } from './useGetTaskDetailsQuery';

interface Context {
  previousTask?: ITask;
  previousTasks?: ITask[];
}

async function handleDeleteTask(id: string) {
  await api.delete(`tasks/${id}`);
}

export function useDeleteTaskMutation({
  onMutate,
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<void, AxiosError, string, Context> = {}) {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string, Context>(handleDeleteTask, {
    onMutate: async id => {
      await queryClient.cancelQueries([TASKS_KEY]);

      const previousTasks = queryClient.getQueryData<ITask[]>([TASK_KEY]);
      const previousTask = queryClient.getQueryData<ITask>([TASK_KEY, id]);

      queryClient.removeQueries([TASK_KEY, id]);

      queryClient.setQueryData<ITask[] | undefined>([TASKS_KEY], old => {
        if (!old) {
          return undefined;
        }

        return old.filter(task => task.id !== id);
      });

      if (onMutate) {
        onMutate(id);
      }

      return {
        previousTask,
        previousTasks,
      };
    },
    onSuccess: async (...params) => {
      await queryClient.invalidateQueries([TASKS_KEY]);

      if (onSuccess) {
        onSuccess(...params);
      }
    },
    onError: (error, id, ctx) => {
      if (ctx?.previousTask) {
        queryClient.setQueryData([TASK_KEY, id], ctx.previousTask);
      }

      if (ctx?.previousTasks) {
        queryClient.setQueryData([TASKS_KEY], ctx.previousTasks);
      }

      if (onError) {
        onError(error, id, ctx);
      }
    },
    ...options,
  });
}
