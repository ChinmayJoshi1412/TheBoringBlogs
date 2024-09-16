import { blogApiSlice } from "./blogapislice";
const apiUrl = import.meta.env.VITE_API_URL;
export const blogapislices = blogApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (data) => ({
                url: `${apiUrl}/blogs/createBlog`,
                method: 'POST',
                body: data,
                credentials: 'include'
            })
        }),
        getAllBlogs: builder.query({
            query: () => ({
                url: `${apiUrl}/blogs/getBlogs`,
                method: 'GET',
                credentials: 'include'
            }),
        }),
        getUserBlogs: builder.query({
            query: () => ({
                url: `${apiUrl}/blogs/getUserBlogs`,
                method: 'GET',
                credentials: 'include'
            })
        }),
        getBlog: builder.query({
            query: ({ id }) => ({
                url: `${apiUrl}/blogs/getBlogs/${id}`,
                method: 'GET',
                credentials: 'include'
            })
        }),
        editBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `${apiUrl}/blogs/editBlog/${id}`,
                method: 'PUT',
                body: data,
                credentials: 'include'
            })
        }),
        deleteBlog: builder.mutation({
            query: ({ id }) => ({
                url: `${apiUrl}/blogs/editBlog/${id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        })
    })
})


export const {
    useCreateBlogMutation,
    useGetAllBlogsQuery,
    useGetUserBlogsQuery,
    useGetBlogQuery,
    useEditBlogMutation,
    useDeleteBlogMutation
} = blogapislices;
