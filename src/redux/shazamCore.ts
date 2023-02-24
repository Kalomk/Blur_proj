import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'd00930d7fcmsh5af62590a45f314p132ccejsn39fa112f3c97');
      headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query<any, { listId: string; locale: string; pageSize: number }>({
      query: (args) => {
        const { listId, locale, pageSize } = args;
        return {
          url: '/charts/track',
          params: { listId, locale, pageSize },
        };
      },
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
