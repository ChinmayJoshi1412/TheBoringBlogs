import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import { useGetBlogQuery } from '../slices/blogapiendpoints';
import PulseLoader from 'react-spinners/PulseLoader';
const BlogPage = () => {

  const {id} = useParams();
  const {data:blog,isFetching} = useGetBlogQuery({id});
  return (
    <div className="flex flex-col w-90% m-4 bg-white rounded-xl shadow-lg">
      {isFetching?
      <div className="flex flex-col justify-center items-center p-64">
        <PulseLoader color='#0F172A'/>
        </div>:
        <div className="">
      <div className="p-4">
        <div className="text-3xl font-bold text-slate">
        {blog.title}
      </div>
      <div className="w-full mt-2 h-1 bg-teal rounded"></div>
      <p className='h-[450px] text-xl text-lightSlate mt-4 whitespace-pre-wrap overflow-y-auto'>
        {blog.content}
      </p>
      </div>
      <div className="w-full mt-2 text-slate font-bold text-end bg-teal rounded-b p-4 text-xl text-white">- {blog.authorName}</div></div>}
    </div>
  )
}

export default BlogPage