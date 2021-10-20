import { useInfiniteQuery } from 'react-query';

import { delay } from '~/utils/delay';

import { api } from '~/services/api';
import type { ITag } from '~/types/entities';

export const QUERY_KEY = '@get_tags';

const PER_PAGE = 10;

export interface QueryResult {
  data: ITag[];
  total: number;
}

async function fetchTags(page = 1) {
  await delay();

  const { data } = await api.get<QueryResult>('tags', {
    params: {
      page,
      perPage: PER_PAGE,
    },
  });

  return data;
}

export function useGetTagsQuery() {
  return useInfiniteQuery(
    [QUERY_KEY],
    ({ pageParam }) => fetchTags(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage) {
          return 1;
        }

        if (lastPage.total > allPages.length * PER_PAGE) {
          return allPages.length + 1;
        }

        return undefined;
      },
    },
  );
}
