/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { useRef } from "react";

type ISendEmail = {
  name: string;
  description: string;
  email: string;
};

const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  //   const {
  //     register,
  //     reset,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<ISendEmail>();

  const handleEmailSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k0ndvhj",
        "template_ydc029l",
        form.current,
        "YgRulTmORe8ZYcETe"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "email sent",
            description: `${result?.text}`,
          });
          console.log({ result });
        },
        (error) => {
          toast({
            title: "error",
            description: `${error?.text}`,
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="relative mt-12">
      <img
        src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-opacity-75 bg-[#252734]">
        <svg
          className="absolute inset-x-0 bottom-0 text-[#252734]"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a lazy dog
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-[#404040] rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                  Sign up for updates
                </h3>
                <form ref={form} onSubmit={handleEmailSend}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      name
                    </label>
                    <input
                      //   {...register("name", { required: "name is required" })}
                      //   area-invalid={errors.name ? "true" : "false"}
                      required
                      name="name"
                      placeholder="enter your name"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    />
                    {/* {errors.name && (
                      <i className="text-sm text-red-400">
                        {errors.name.message}
                      </i>
                    )} */}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      description
                    </label>
                    <textarea
                      //   {...register("description", {
                      //     required: "description is required",
                      //   })}
                      //   area-invalid={errors.description ? "true" : "false"}
                      name="description"
                      required
                      placeholder="description"
                      className="flex-grow w-full px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline  text-white h-32 resize-none "
                    />
                    {/* {errors.description && (
                      <i className="text-sm text-red-400">
                        {errors.description.message}
                      </i>
                    )} */}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      E-mail
                    </label>
                    <input
                      //   {...register("email", { required: "email is required" })}
                      //   area-invalid={errors.email ? "true" : "false"}
                      name="email"
                      required
                      placeholder="enter your email"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-white"
                    />
                    {/* {errors.email && (
                      <i className="text-sm text-red-400">
                        {errors.email.message}
                      </i>
                    )} */}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#6620fe] focus:shadow-outline focus:outline-none"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
