/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/api";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["Product"], // Tag products data with 'Product' tag
    }),

    getCategories:builder.query({
      query:(query)=>({
        url: `/products?category=${query}`,
        method: "GET",
      })
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
      invalidatesTags: ["Product"], // Invalidate products data after adding
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"], // Invalidate products data after updating
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"], // Invalidate products data after deletion
    }),
  }),
});

export const {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
useGetCategoriesQuery,
useUpdateProductMutation,
}:any= productApi;
