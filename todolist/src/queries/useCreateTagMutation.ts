import type { AxiosError } from 'axios';
import type { UseMutationOptions } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';
import type { ITag } from '~/types/entities';

import { QUERY_KEY as TAGS_KEY } from './useGetTagsQuery';

export type FormData = Omit<ITag, 'id'>;

async function handleCreateTag(formData: FormData) {
  await delay();
  const { data } = await api.post<ITag>('tags', formData);

  return data;
}

const getTagsKey = [TAGS_KEY];

export function useCreateTagMutation({
  onMutate,
  onSuccess,
  ...options
}: UseMutationOptions<ITag, AxiosError, FormData> = {}) {
  const queryClient = useQueryClient();

  return useMutation<ITag, AxiosError, FormData>(handleCreateTag, {
    onMutate: async params => {
      await queryClient.cancelQueries(getTagsKey);

      if (onMutate) {
        onMutate(params);
      }
    },
    onSuccess: async (...params) => {
      await queryClient.invalidateQueries(getTagsKey);

      if (onSuccess) {
        onSuccess(...params);
      }
    },
    ...options,
  });
}
