import Mobile_header from "../components/mobile_header";
import Facebook from "../images/facebook.svg";
import Apple from "../images/apple.svg";
import Google from "../images/google.svg";
import Toggle from "../../dashboard/toggle"
import bar from "../../icons/blue-bar.svg"
import Header from "../components/header";
function Login() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen sm:min-h-fit sm:h-fit w-full sm:w-[60rem] overflow-hidden relative sm:rounded-3xl">
      <img src={bar} className="absolute hidden sm:block"></img>
      <div className="sm:hidden">
        < Mobile_header title="Login" display_logout="hidden"/>
      </div>
      <div className="hidden sm:block">
        <Header title="Login"/>
      </div>
        <div className="px-6 flex flex-col sm:px-14">
          <p className="text-[1.2rem] font-normal tracking-[-0.3px] text-[#999] my-10">To continue, log in to Aid Humanity.</p>
          <div className="flex flex-col gap-4">
            <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-primary-medium rounded-xl
              flex space-x-4 justify-center items-center'>
              <img src={Facebook}></img>
              <span>Continue with Facebook</span>
            </button>
            <button className='w-full py-6 text-[1.4rem] font-semibold text-white bg-black rounded-xl
              flex space-x-4 justify-center items-center'>
              <img src={Apple}></img>
              <span>Continue with Apple</span>
            </button>
            <button className="w-full py-6 text-[1.4rem] font-semibold text-spanish-gray bg-transparent outline
              outline-spanish-gray rounded-xl flex justify-center items-center space-x-4">
              <img src={Google}></img>
              <span>Continue with Google</span>
            </button>
          </div>
          <p className="self-center text-[1.2rem] font-normal tracking-[-0.3px] text-body my-6">OR</p>
          <div className="flex flex-col gap-6">
            <div className="relative">
              <input type="text" id="email" className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
              <label for="email" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Email Address or Username *</label>
            </div>
            <div className="relative">
              <input type="password" id="password" className="focus:outline-primary bg-transparent block border-light rounded-xl px-4 pt-8 pb-3 w-full text-[1.3rem] font-medium text-black tracking-[0px]" placeholder=" " />
              <label for="password" className="absolute text-[1.1rem] font-semibold tracking-[0px] text-gray  top-2 left-4">Password*</label>
              <img src="./icons/eye-gray.svg" className="absolute right-4 top-6"></img>
            </div>
          </div>

          <p className="text-[1.2rem] font-bold tracking-[0.18px] text-primary mt-6">Forgot password</p>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-4 items-center my-12">
              < Toggle />
              <p className="text-[1.4rem] font-medium tracking-[0px] text-black">Remember me</p>
            </div>
            <button className="w-full sm:w-auto sm:px-40 h-20 py-6 uppercase text-[1.4rem] font-semibold text-white bg-primary rounded-xl">
              Log In
            </button>
          </div> 
        </div>
        <div className="bg-primary-light px-16 py-12 mt-32">
          <p className="text-[1.6rem] font-bold tracking-[-0.4px] text-black">Don’t have an account? <span className="text-primary">Sign up</span>.</p>
        </div>
    </div>
  );
}
export default Login;