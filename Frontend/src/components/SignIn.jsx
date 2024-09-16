import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { useLoginUserMutation } from "../slices/authapiendpoints.js";
import { setCredentials } from "../slices/localauthslice.js";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader.js";
const SignIn = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginUserMutation();
    const signInHandler = async (e) => {
        e.preventDefault();
        try {
          const res = await login({ email, password }).unwrap();
          dispatch(setCredentials({ ...res }));
          toast.success(`Welcome ${res.name}`);
          navigate('/')
          console.log(res); 
        } catch (error) {
          toast.error(`Invalid Credentials`)
        }
      };
  return (
    <>
        <div className="flex flex-col w-1/2 md:w-1/3 p-2 rounded-l-xl border border-white transition-all duration-300 transform ease-in-out">
              <form
                onSubmit={signInHandler}
                className="space-y-6"
              >
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
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-teal px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-lightTeal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    {isLoading?<PulseLoader color="white"/>:'Login'}
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col w-1/2 md:w-1/3 p-2 rounded-r-xl border bg-slate text-center justify-center text-wrap p-2 transition-all duration-500">
              <div className="text-white text-2xl md:text-3xl font-bold">
                Welcome back!
              </div>
            </div>
    </>
  )
}

export default SignIn