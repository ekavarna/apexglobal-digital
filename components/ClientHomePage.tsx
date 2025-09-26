// app/home/ClientHomePage.tsx
"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from "dompurify";
import { useRouter, useSearchParams } from "next/navigation";

const ClientHomePage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showSignIn, setShowSignIn] = useState(true);
  const signUpFormRef = useRef<HTMLFormElement>(null);
  const signInFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const reason = searchParams.get("reason");
    if (reason) {
      const cleanMessage = DOMPurify.sanitize(reason);
      toast.error(<div dangerouslySetInnerHTML={{ __html: cleanMessage }} />, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  }, [searchParams]);

  const handleShowHideForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFormData = Object.fromEntries(formData);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("wstoken", "51c062fd9e4678d945fe10cf3c508073");
    urlencoded.append("wsfunction", "local_resources_tenantlogin");
    urlencoded.append("username", newFormData.email as string);
    urlencoded.append("password", newFormData.password as string);
    urlencoded.append("email", newFormData.email as string);
    urlencoded.append("tenantid", "15");
    urlencoded.append("firstname", newFormData.firstname as string);
    urlencoded.append("lastname", newFormData.lastname as string);

    try {
      const response = await fetch(
        "/api/webservice/rest/server.php?moodlewsrestformat=json",
        {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        }
      );
      const result = await response.json();

      if (result.status) {
        toast.success("Sign-up successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        if (signUpFormRef.current) {
          signUpFormRef.current.reset();
        }
      } else {
        const errorMessage =
          result.warnings?.[0]?.message || "Sign-up failed. Please try again.";
        const cleanMessage = DOMPurify.sanitize(errorMessage);
        toast.error(
          <div dangerouslySetInnerHTML={{ __html: cleanMessage }} />,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sign-up. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newFormData = Object.fromEntries(formData);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("username", newFormData.username as string);
    urlencoded.append("password", newFormData.password as string);

    try {
      const response = await fetch("/api/login/tanentlogin.php", {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      });
      const result = await response.json();

      if (!result.status) {
        toast.success("Sign-in successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });

        const redirectUrl = `https://digitallms.apexgloballearning.com/login/tanentlogin.php?username=${encodeURIComponent(
          newFormData.username as string
        )}&password=${encodeURIComponent(newFormData.password as string)}`;

        router.push(redirectUrl);

        if (signInFormRef.current) {
          signInFormRef.current.reset();
        }
      } else {
        const errorMessage =
          result.warnings?.[0]?.message || "Sign-in failed. Please try again.";
        const cleanMessage = DOMPurify.sanitize(errorMessage);
        toast.error(
          <div dangerouslySetInnerHTML={{ __html: cleanMessage }} />,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          }
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during sign-in. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-8 items-center">
        <div className="hidden md:flex items-center justify-center bg-cover bg-center rounded-l-xl">
          <span className="text-4xl font-bold text-white">
            <span className="text-[#bac500]">
              Empowering <br />
              Organizations.
            </span>
            &nbsp;Driving
            <br />
            Skilling at scale
          </span>
        </div>
        <div
          id="form-section"
          className="mt-20 p-6 md:p-8 bg-white rounded-xl flex flex-col justify-center max-w-md mx-auto w-full"
        >
          {showSignIn ? (
            <form
              method="post"
              id="signIn"
              className="space-y-4"
              action="https://digitallms.apexgloballearning.com/login/tanentlogin.php"
              ref={signInFormRef}
            >
              <div className="text-red-500" id="loginerrormessage"></div>
              <div>
                <label htmlFor="UserName" className="font-semibold text-sm">
                  UserName
                </label>
                <input
                  type="text"
                  placeholder="Enter UserName"
                  name="username"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <input type="hidden" id="logintoken" name="logintoken" value="" />
              <button
                type="submit"
                className="block w-full py-2 text-apex-blue-light border-2 border-apex-blue-light text-center rounded-md hover:bg-apex-blue-light hover:text-white transition-colors cursor-pointer"
              >
                Sign in
              </button>
            </form>
          ) : (
            <form
              id="signUp"
              onSubmit={handleSignUpSubmit}
              className="space-y-4"
              ref={signUpFormRef}
            >
              <div className="text-red-500" id="loginerrormessage"></div>
              <div>
                <label htmlFor="firstname" className="font-semibold text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="font-semibold text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-semibold text-sm">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  required
                  autoComplete="off"
                  className="w-full p-3 border-2 border-[#ccc] rounded-md focus:border-black transition-all"
                />
              </div>
              <button
                type="submit"
                className="block w-full py-2 text-apex-blue-light border-2 border-apex-blue-light text-center rounded-md hover:bg-apex-blue-light hover:text-white transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </form>
          )}
          <div className="flex justify-between mt-6">
            <Link
              href="https://digitallms.apexgloballearning.com/login/forgot_password.php"
              target="_blank"
              className="text-sm font-semibold text-black hover:text-[#0d85b9]"
            >
              Forgot password?
            </Link>
            <p
              id="accountSwitch"
              onClick={handleShowHideForm}
              className="text-sm font-semibold text-black hover:text-[#0d85b9] cursor-pointer"
            >
              {showSignIn
                ? "Do not have an account?"
                : "Already have an account?"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHomePage;
