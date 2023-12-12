import Image from "next/image";
import Link from "next/link";
import supabase from "./superbase/superbase";
import { useRouter } from "next/router";

export default function Home() {
  let router = useRouter();
  const handleSignIn =async (e) => {
    e.preventDefault();
    const form = e.target;
    const email=form.email.value;
    const password=form.password.value;
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
      
    })
    const { data: { user } } = await supabase.auth.getUser();
    if(user){
      
      alert("login success");
      router.push("/dashboard");

    }
    else(alert("login failed"))

    console.log(email, password,user );
    // console.log(getUser())
  };

  const handleForgetPassword =()=>{

  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left"></div>
          <div className="card shrink-0 w-96 max-w-2xl shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-5">Sign In</h1>
            <form
              onSubmit={handleSignIn}
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a onClick={handleForgetPassword} className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                ></input>
              </div>
              <div>
                <h2 className="text-end  mb-5 mr-4">
                  Are You new here?
                  <Link href={"/register"}> Sign up</Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
