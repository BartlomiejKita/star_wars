import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SwApi = createApi({
	reducerPath: "people",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://swapi.dev/api/",
	}),
	tagTypes: ["People", "Favorite"],
	endpoints: (builder) => ({
		getPeople: builder.query({
			query: () => "people",
			providesTags: ["People"],
		}),
		getFavorite: builder.query({
			query: () => "people",
			invalidatesTags: ["Favorite"],
		}),
	}),
});

export const { useGetPeopleQuery, useGetFavoriteQuery} = SwApi;
