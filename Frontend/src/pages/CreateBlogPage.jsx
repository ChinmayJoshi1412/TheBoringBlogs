import {useState} from 'react'
import {useCreateBlogMutation} from '../slices/blogapiendpoints';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import PulseLoader from 'react-spinners/PulseLoader';
const CreateBlogPage = () => {

  const [title, settitle] = useState('');

  const [content, setcontent] = useState('')

  const [createblog,{isLoading}] = useCreateBlogMutation();

  const navigate = useNavigate();

  const postHandler = async(e)=>{
    e.preventDefault();
      try {
          const res = await createblog({title,content});
          console.log(res);
          toast.success('Blog Posted');
          navigate('/myblogs')
      } catch (error) {
        toast.error('Unable to post the blog');
      }
  }
  return (
    <div className='flex flex-col w-full justify-center items-center p-4'>
      <div className="text-3xl font-bold text-slate">Create a new Blog</div>
      <form className="flex flex-col items-center mt-4 w-full space-y-6" onSubmit={postHandler}>
                
                  <label
                    className="flex text-lg font-bold leading-6 text-slate"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="title"
                      name="title"
                      required
                      value={title}
                      onChange={(e)=>settitle(e.target.value)}
                      className="flex min-w-[400px] md:min-w-[800px] rounded-md border-0 p-4 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>

                
                  <div className="flex items-center justify-between">
                    <label
                      className="flex text-lg font-bold leading-6 text-slate"
                    >
                      Content
                    </label>
                  </div>
                  <div className="mt-2">
                    <textarea
                      id="content"
                      name="content"
                      type="text"
                      required
                      value={content}
                      onChange={(e)=>setcontent(e.target.value)}
                      className="flex min-w-[400px] h-[200px] md:min-w-[800px] rounded-md border-0 p-4 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>

                
                  <button
                    type="submit"
                    className="flex min-w-[400px] justify-center rounded-md bg-teal px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    {isLoading?<PulseLoader color="white"/>:'Post'}
                  </button>
              
              </form>
    </div>
  )
}

export default CreateBlogPage