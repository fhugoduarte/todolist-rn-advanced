import { useQuery } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';
import type { ITag } from '~/types/entities';

export const QUERY_KEY = '@get_tag_details';

async function fetchTagDetails(id?: string) {
  await delay();

  const { data } = await api.get<ITag>(`tags/${id}`);

  return data;
}

export function useGetTagDetailsQuery(id?: string) {
  return useQuery([QUERY_KEY, id], () => fetchTagDetails(id), {
    enabled: !!id,
  });
}
