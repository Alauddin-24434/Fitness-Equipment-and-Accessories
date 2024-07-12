import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-equipment-and-accessories-backend-six.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
