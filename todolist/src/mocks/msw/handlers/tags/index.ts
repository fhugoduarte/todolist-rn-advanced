import { rest } from 'msw';

import { composeApiUrl } from '~/services/api';

function createTag() {
  return rest.post(composeApiUrl('tags'), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 'fake-id',
        ...(req.body as object),
      }),
    );
  });
}

export const tagsHandler = [createTag()];
