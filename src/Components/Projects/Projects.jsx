import React from "react";
import gericht from "../../assets/projects/gericht.png";
import flashcardgenerator from "../../assets/projects/Flashcard-generator.png";
import sneakpeek from "../../assets/projects/Sneakpeek.png";
import weatherapp from "../../assets/projects/weatherapp.png";
import cryptoPlace from "../../assets/projects/cryptoapp.png";
import Virtual_R from "../../assets/projects/v.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: gericht,
      Demo: "https://gerich-tan.vercel.app/",
      Code: "https://github.com/dhruvv9/Gerich-Restaurant-applicaton",
    },
    {
      id: 2,
      src: flashcardgenerator,
      Demo: "https://flashcard-generator-9dc86f.netlify.app/",
      Code: "https://github.com/dhruvv9/flashcard-generator-application",
    },
    {
      id: 3,
      src: sneakpeek,
      Demo: "https://github.com/dhruvv9/sneak-peek-client",
      Code: "https://github.com/dhruvv9/sneak-peek-client",
    },
    {
      id: 4,
      src: weatherapp,
      Demo: "https://weather-app-kappa-jet-78.vercel.app/",
      Code: "https://github.com/dhruvv9/Weather-app",
    },
    {
      id: 5,
      src: cryptoPlace,
      Demo: "https://crypto-price-tracker-sandy.vercel.app/",
      Code: "https://github.com/dhruvv9/Crypto_price_tracker",
    },
    {
      id: 6,
      src: Virtual_R,
      Demo: "https://virtual-r-1.vercel.app/",
      Code: "https://github.com/dhruvv9/Virtual_R-1",
    },
  ];
  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="projects"
      className="  w-full h-screen lg:mt-[400px] mt-[500px] md:mt-[100px] text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Demo, Code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLink(Demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openLink(Code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
