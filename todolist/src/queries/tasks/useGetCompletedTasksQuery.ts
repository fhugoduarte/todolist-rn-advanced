import { useQuery } from 'react-query';

import { getTasksQuery } from './getTasksQuery';

export function useGetCompletedTasksQuery() {
  return useQuery({
    ...getTasksQuery,
    select: tasks => tasks.filter(task => task.done),
  });
}
