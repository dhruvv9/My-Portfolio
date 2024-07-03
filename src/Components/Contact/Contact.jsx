import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="  p-8 lg:mt-[150px]  mt-[400px] md:mt-0 h-screen text-white"
    >
      <div className="flex flex-col p-4  max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl flex justify-center items-center font-bold  border-b-4 border-gray-500">
            Contact
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/df8eb8bf-d1c8-407d-94ba-50b8787fdd0e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
