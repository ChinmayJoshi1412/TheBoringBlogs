import {useEffect} from 'react'
import { useGetAllBlogsQuery } from '../slices/blogapiendpoints'
import { Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';
const AllBlogsPage = () => {
  const {data,isFetching,refetch} = useGetAllBlogsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div className='flex flex-col w-full justify-center items-center p-4'>
      <div className="text-3xl font-bold text-slate">All Blogs</div>
      {isFetching?
      <div className="flex flex-col justify-center items-center p-56">
        <PulseLoader color='#0F172A'/>
        </div>:
      <div className="h-[440px] overflow-y-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((blog)=>(
          <div key={blog._id}>
             <div className="min-w-[400px] bg-white rounded-xl shadow-md">
                <div className="p-4">
                  <div className="">
                    <h3 className="text-xl font-bold">{blog.title}</h3>
                  </div>
                </div>
                <Link to={`/blogs/${blog._id}`}>
                <div className="flex flex-row rounded-b mb-4 text-center font-bold text-white justify-center">
                    <div className="flex-1 rounded-bl p-2 bg-teal hover:bg-lightTeal">Read More</div>
                </div>
                </Link>
              </div>
        </div>))}
      </div>}
    </div>
  )
}

export default AllBlogsPage