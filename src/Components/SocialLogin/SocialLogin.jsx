
import { FaGoogle } from "react-icons/fa";
import useAuth from "./../../hooks/useAuth";
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
  const {googleSignIn}=useAuth();
  const axiosPublic=useAxiosPublic();
  const navigate=useNavigate()

  const handleGoogleSignIn = () => {
  googleSignIn()
    .then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
        console.log(res.data);
        navigate('/')
      })
    });
  };
  return (
    <div className="mt-">
      <button
        onClick={handleGoogleSignIn}
        className=" mb- bg-black text-white rounded  font-semibold p-3 w-full flex items-center justify-center"
      >
        <FaGoogle className="text-xl mr-3"></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
