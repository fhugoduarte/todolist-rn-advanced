import { useQuery } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';
import type { ITag } from '~/types/entities';

export const QUERY_KEY = '@get_tags';

export interface QueryResult {
  data: ITag[];
  total: number;
}

async function fetchTags() {
  await delay();

  const { data } = await api.get<QueryResult>('tags');

  return data;
}

export function useGetTagsQuery() {
  return useQuery([QUERY_KEY], fetchTags);
}
