import { useEffect } from "react";
import HeroBanner from "../components/HeroBanner"
import { useGetAllBlogsQuery } from '../slices/blogapiendpoints'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";
const HomePage = () => {
  const {userInfo} = useSelector((state)=>state.auth);
  const {data,isFetching,refetch} = useGetAllBlogsQuery();
  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <div>
      <HeroBanner/>
      {isFetching?
      <div className="flex flex-col justify-center items-center p-56">
        <PulseLoader color='#0F172A'/>
        </div>:
      <div className="">
      <div className="flex flex-col p-2">
        <div className="font-bold text-slate text-3xl my-8">
          Check out the latest blogs
        </div>
      </div>
      <div className="p-4 w-full overflow-x-hidden">
      <div className="flex whitespace-nowrap space-x-4 animate-scroll-slow">
        {data.map((blog)=>(
          <div key={blog._id}>
             <div className="w-[200px] md:w-[400px] text-wrap bg-white rounded-xl shadow-md">
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
      </div>
    </div>
    </div>}
    </div>
  )
}

export default HomePage