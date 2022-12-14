import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SwApi = createApi({
	reducerPath: "people",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://swapi.py4e.com/api/",
	}),
	tagTypes: ["People", "Favorite", "Id"],
	endpoints: (builder) => ({
		getPeople: builder.query({
			query: (page = 1) => `people/?page=${page}`,
			providesTags: ["People"],
		}),
		getPerson: builder.query({
			query: (query) => `people/?search=${query}`,
			invalidatesTags: ["Favorite"],
		}),
	}),
});

export const { useGetPeopleQuery, useGetPersonQuery } = SwApi;
