import { renderHook } from '@testing-library/react-hooks';
import { rest } from 'msw';

import { server } from '~/mocks/msw/servers/server';
import { testQueryClient } from '~/mocks/react-query/client';
import { ReactQueryWrapper as wrapper } from '~/mocks/wrappers/ReactQueryProvider';
import type { ITask } from '~/types/entities';

import { QUERY_KEY as TASKS_KEY } from './getTasksQuery';
import { useDeleteTaskMutation } from './useDeleteTaskMutation';
import { QUERY_KEY as TASK_DETAILS_KEY } from './useGetTaskDetailsQuery';

function renderQueryHook() {
  return renderHook(useDeleteTaskMutation, {
    wrapper,
  });
}

const FAKE_TASK = {
  id: 'fake-id',
  title: 'fake-title',
  description: 'fake-description',
};

function getQueryData(id?: string) {
  return id
    ? testQueryClient.getQueryData<ITask>([TASK_DETAILS_KEY, id])
    : testQueryClient.getQueryData<ITask[]>([TASKS_KEY]);
}

beforeEach(() => {
  testQueryClient.setQueryData([TASKS_KEY], [FAKE_TASK]);
  testQueryClient.setQueryData([TASK_DETAILS_KEY, FAKE_TASK.id], FAKE_TASK);
});

describe('Mutation | useDeleteTaskMutation', () => {
  it('should go through the optimistic flow and remove task details from cache', async () => {
    const { result, waitFor } = renderQueryHook();

    result.current.mutate(FAKE_TASK.id);

    await waitFor(() => result.current.isLoading);

    expect(getQueryData(FAKE_TASK.id)).toBeUndefined();
  });

  it('should reset task details cache when mutation fails', async () => {
    server.use(rest.delete('*', (_req, res) => res.networkError('Error')));

    const { result, waitFor } = renderQueryHook();

    result.current.mutate(FAKE_TASK.id);

    await waitFor(() => result.current.isError);

    expect(getQueryData(FAKE_TASK.id)).toEqual(FAKE_TASK);
  });
});
