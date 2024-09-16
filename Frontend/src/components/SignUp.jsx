import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useRegisterUserMutation } from "../slices/authapiendpoints.js";
import { setCredentials } from "../slices/localauthslice.js";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader.js";
const SignUp = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register,{isLoading}] = useRegisterUserMutation();
    const signUpHandler = async(e)=>{
        e.preventDefault();
        if(confirmpassword===password){
          try {
            const res = await register({name,email,password}).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/')
            toast.success(`Welcome ${res.name}`);
            console.log(res);
            
          } catch (error) {
            toast.error('User already exists');
          }
        }
        else
        {
            toast.error('Passwords arent matching');
        }
    }
  return (
    <>
        <div className="flex flex-col w-1/2 md:w-1/3 p-2 rounded-l-xl border bg-slate text-center justify-center text-wrap p-2">
              <div className="text-white text-2xl md:text-3xl font-bold">
                Welcome to TheBoringBlogs!
              </div>
            </div>
            <div className="flex flex-col w-1/2 md:w-1/3 p-2 rounded-l-xl border border-white">
              <form
                onSubmit={signUpHandler}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="flex text-lg font-bold leading-6 text-slate"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                      className="flex w-full rounded-md border-0 p-2 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="flex text-lg font-bold leading-6 text-slate"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                      autoComplete="email"
                      className="flex w-full rounded-md border-0 p-2 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="flex text-lg font-bold leading-6 text-slate"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="flex w-full rounded-md border-0 p-2 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      className="flex text-lg font-bold leading-6 text-slate"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={confirmpassword}
                      onChange={(e) => setconfirmpassword(e.target.value)}
                      required
                      autoComplete="current-password"
                      className="flex w-full rounded-md border-0 p-2 text-slate shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-slate text-sm md:text-lg sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-teal px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    {isLoading?<PulseLoader color="white"/>:'Register'}
                  </button>
                </div>
              </form>
            </div>
    </>
  )
}

export default SignUp