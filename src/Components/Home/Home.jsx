import React from "react";
import HeroImage from "../../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="flex justify-center items-center">
            <img
              src={HeroImage}
              alt="my profile"
              className="  w-60 h-[250px]  lg:w-2/6 lg:h-[290px]  object-cover rounded-full"
            />
          </div>

          <h2 className="text-2xl mt-10 sm:text-4xl font-bold text-white">
            I'm a Front-end driven MERN stack developer🌱
          </h2>
          <p className="flex justify-center items-center text-gray-500 py-4  max-w-full">
            👋Hello there...!, welcome to my portolio🌟
          </p>

          <div className="flex justify-center items-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
