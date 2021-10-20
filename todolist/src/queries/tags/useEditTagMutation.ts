import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';
import type { ITag } from '~/types/entities';

import { QUERY_KEY as TAGS_KEY } from './useGetTagsQuery';

export type FormData = ITag;

async function handleEditTag(formData: FormData) {
  await delay();
  const { data } = await api.put<ITag>(`tags/${formData.id}`, formData);

  return data;
}

export function useEditTagMutation({
  onMutate,
  onSuccess,
  ...options
}: UseMutationOptions<ITag, AxiosError, FormData> = {}) {
  const queryClient = useQueryClient();

  return useMutation<ITag, AxiosError, FormData>(handleEditTag, {
    onMutate: async params => {
      await queryClient.cancelQueries([TAGS_KEY]);

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
