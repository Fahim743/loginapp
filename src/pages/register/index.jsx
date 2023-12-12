import React from "react";
import Link from "next/link";
import supabase from "../superbase/superbase";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const register = () => {
  let router = useRouter();
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.phoneNumber.value;
    const name = form.name.value;
    const confirmPassword = form.confirmPassword.value;

    if (password == confirmPassword) {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            phone: phone,
          },
        },
      });
      alert("Registration Successful");

      
      router.push("/");
    } else {
      alert("password doesnt match");
    }

    // console.log(email, password, name, phone);
   
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  ">
          <div className="card shrink-0 w-96 max-w-2xl shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-5">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                ></input>
              </div>
              <div>
                <h2 className="text-end  mb-5 mr-4">
                  Already have an account?
                  <Link className="italic" href={"/"}>
                    {" "}
                    Sign in
                  </Link>
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
