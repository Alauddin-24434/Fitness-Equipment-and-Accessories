/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/api";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCartsByUserId: builder.query({
      query: (id) => ({
        url: `/carts/${id}`,
        method: "GET",
      }),
      providesTags: ["Cart"], // Tag products data with 'Product' tag
    }),
   
    addCart: builder.mutation({
      query: (data) => ({
        url: "/carts",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"], // Invalidate products data after adding
    }),
    deleteSingleCart: builder.mutation({
      query: (id) => {
        console.log("Deleting cart with ID:", id); // Log the id parameter
        return {
          url: `/carts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Cart"], // Invalidate products data after deletion
    }),
    allDeleteCatrtSingleUser: builder.mutation({
      query: (id) => ({
        url: `/carts/all/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"], // Invalidate products data after deletion
    }),
    updateCart: builder.mutation({
      query: ({ id, quantityStatus }) => ({
        url: `/carts/${id}`,
        method: "PUT",
        body: { quantityStatus },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
 useAddCartMutation,
 useAllDeleteCatrtSingleUserMutation,
 useDeleteSingleCartMutation,
 useGetCartsByUserIdQuery,
 useUpdateCartMutation,
} :any= cartApi;
