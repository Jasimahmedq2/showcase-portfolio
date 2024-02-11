/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { RefObject, useRef, FormEvent } from "react";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement | null>(
    null
  ) as RefObject<HTMLFormElement>;

  const handleEmailSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_k0ndvhj",
          "template_s78ixxa",
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
    }
    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="relative mt-12 ">
      <img
        src="https://i.ibb.co/tPH5dtQ/2.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
        <div className="relative pl-8 pr-4  mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12"
            >
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase pb-6">
                contact with me
              </h1>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                If you have any inquiries or would like to discuss potential
                projects, please feel free to get in touch
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                I'm always open to new opportunities and collaborations, so
                don't hesitate to connect!
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-[#404040] rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">
                  Contact
                </h3>
                <form ref={form} onSubmit={handleEmailSend}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      //   {...register("name", { required: "name is required" })}
                      //   area-invalid={errors.name ? "true" : "false"}
                      required
                      name="name"
                      placeholder="enter your name"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-400 focus:outline-none focus:shadow-outline text-white"
                    />
                    {/* {errors.name && (
                      <i className="text-sm text-red-400">
                        {errors.name.message}
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
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-400 focus:outline-none focus:shadow-outline text-white"
                    />
                    {/* {errors.email && (
                      <i className="text-sm text-red-400">
                        {errors.email.message}
                      </i>
                    )} */}
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      //   {...register("description", {
                      //     required: "description is required",
                      //   })}
                      //   area-invalid={errors.description ? "true" : "false"}
                      name="description"
                      required
                      placeholder="message..."
                      className="flex-grow w-full px-4 mb-2 transition duration-200 bg-[#252734] border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-400 focus:outline-none focus:shadow-outline  text-white h-32 resize-none "
                    />
                    {/* {errors.description && (
                      <i className="text-sm text-red-400">
                        {errors.description.message}
                      </i>
                    )} */}
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button className="flex items-center relative w-36 border-2 border-gray-300 text-sky-500 p-4 rounded-lg group">
                      <span>Submit</span>
                      <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-[#256ddc] rounded-lg">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-10"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M4 12H20M20 12L14 6M20 12L14 18"
                              stroke="#0ea5e9"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </span>
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
