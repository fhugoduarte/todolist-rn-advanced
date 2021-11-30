import { renderHook } from '@testing-library/react-hooks';

import { testQueryClient } from '~/mocks/react-query/client';
import { ReactQueryWrapper as wrapper } from '~/mocks/wrappers/ReactQueryProvider';

import { useCreateTagMutation } from './useCreateTagMutation';
import { QUERY_KEY as TAGS_KEY } from './useGetTagsQuery';

function renderQueryHook() {
  return renderHook(useCreateTagMutation, {
    wrapper,
  });
}

describe('Mutation | useCreateTagMutation', () => {
  it('should invalidate tags query when success', async () => {
    const spyQueryClient = jest.spyOn(testQueryClient, 'invalidateQueries');

    const { result, waitFor } = renderQueryHook();

    result.current.mutate({
      title: 'fake-title',
      color: 'fake-color',
    });

    await waitFor(() => result.current.isSuccess);

    expect(spyQueryClient).toBeCalledWith([TAGS_KEY]);
    spyQueryClient.mockRestore();
  });
});
