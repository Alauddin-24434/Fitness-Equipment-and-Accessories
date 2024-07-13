import { baseApi } from "../../api/api";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      signUp: builder.mutation({
        query: (data) => ({
          url: "/auth/signup",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ['Auth'], // Invalidate 'Auth' data after signing up
      }),
      login: builder.mutation({
        query: (credentials) => ({
          url: "/auth/signin",
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ['Auth'], // Invalidate 'Auth' data after signing in
      }),
      // Other auth-related endpoints can be defined similarly
    }),
  });
  

  export const {
   useSignUpMutation,
   useLoginMutation
  } = authApi;