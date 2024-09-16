import { apiSlice } from "./authapislice";
const apiUrl = import.meta.env.VITE_API_URL;

export const authapiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (data) => ({
                url: `${apiUrl}/users/register`,
                method: 'POST',
                body: data,
                credentials: 'include', // Include credentials (cookies)
            })
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: `${apiUrl}/users/login`,
                method: 'POST',
                body: data,
                credentials: 'include', // Include credentials (cookies)
            })
        }),
        logoutUser: builder.mutation({
            query: (data) => ({
                url: `${apiUrl}/users/logout`,
                method: 'POST',
                body: data,
                credentials: 'include', // Include credentials (cookies)
            })
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutUserMutation } = authapiSlice;
