import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
        I am Dhruva👋, a MERN Stack web developer🚀 with a
strong focus on front-end development. I am
passionate about creating web solutions that elevate
user experience and prioritize accessibility for all
users. With a commitment to crafting seamless and
user-friendly interfaces, I bring a dynamic 🤹skill set to
deliver innovative😇 and inclusive digital experiences🌟.
        </p>

        
      </div>
    </div>
  );
};

export default About;