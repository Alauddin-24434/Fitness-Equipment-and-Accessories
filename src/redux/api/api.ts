// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://fitness-equipment-and-accessories-backend-six.vercel.app/api",
//   }),
//   tagTypes:['product'],
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => ({
//         url: "/products",
//         method: "GET",
//       }),
//       providesTags:['product'],
//     }),
//     getProductById: builder.query({
//       query: (id) => ({
//         url: `/products/${id}`,
//         method: "GET",
//       }),
//     }),
//     addProduct: builder.mutation({
//       query: (data) => ({
//         url: "/products",
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags:['product']
//     }),
//     updateProduct: builder.mutation({
//       query: ({ id, ...data }) => ({
//         url: `/products/${id}`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//     deleteProduct: builder.mutation({
//       query: (id) => ({
//         url: `/products/${id}`,
//         method: "DELETE",
//       }),
//       invalidatesTags:['product']
//     }),
//   }),
// });

// export const {
//   useGetProductsQuery,
//   useGetProductByIdQuery,
//   useAddProductMutation,
//   useUpdateProductMutation,
//   useDeleteProductMutation,
// }:any = baseApi;


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-equipment-and-accessories-backend-six.vercel.app/api",
  }),
  tagTypes: ['Product','Auth'], // Tag type for products
  endpoints: () => ({}), // No endpoints defined in baseApi
});
