import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';

import { QUERY_KEY as TAG_DETAILS_KEY } from './useGetTagDetailsQuery';
import { QUERY_KEY as TAGS_KEY } from './useGetTagsQuery';

async function handleDeleteTag(id: string) {
  await delay();
  await api.delete(`tags/${id}`);
}

export function useDeleteTagMutation({
  onMutate,
  onSuccess,
  ...options
}: UseMutationOptions<void, AxiosError, string> = {}) {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError, string>(handleDeleteTag, {
    onMutate: async id => {
      await queryClient.cancelQueries([TAGS_KEY]);
      queryClient.removeQueries([TAG_DETAILS_KEY, id]);

      if (onMutate) {
        onMutate(id);
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
