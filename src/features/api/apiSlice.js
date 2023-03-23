import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000/" }),
  tagTypes: ["books", "book"],

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["books"],
      keepUnusedDataFor: 3000,
    }),
    getBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: (_result, _error, arg) => [{ type: "book", id: arg }],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "book", id: arg.id },
        "books",
      ],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = apiSlice;

export default apiSlice;
