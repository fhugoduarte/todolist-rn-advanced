import { rest } from 'msw';

import { composeApiUrl } from '~/services/api';

function deleteTask() {
  return rest.delete(composeApiUrl('tasks/:id'), (req, res, ctx) => {
    return res(ctx.status(204));
  });
}

export const tasksHandler = [deleteTask()];
