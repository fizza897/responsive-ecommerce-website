import React from "react";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa"
const footerLinks = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "Shop",
      link: "/#shop",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Blogs",
      link: "/#blog",
    },
  ];
const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950">
        <div className="container">
          <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/* cols first links */}
            <div className="py-8 px-4">
              <a
                href="#"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              >
                Eshop
              </a>
              <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores alias cum
              </p>
              <p className="text-gray-500 mt-4">
                Made with 💖 by The Coding Journey
              </p>
              <div className="mt-5">
              <a
                className="bg-primary/90 text-white py-2 px-4 mt-10 text-sm rounded-full mb-3"
                href=""
                >
                Visit our Youtube Channel
              </a>
                </div>
            </div>
            {/* cols second links */}
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
                    <ul className="space-y-3">
                        {footerLinks.map((data,index)=>(
                            <li key={index}>
                                <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black  duration-300">
                                    {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            {/* cols third links */}
            <div className="py-8 px-4">
                    <h1 className="text-xl font-bold sm:text-left mb-3">Quick Links</h1>
                    <ul className="space-y-3">
                        {footerLinks.map((data,index)=>(
                            <li key={index}>
                                <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black  duration-300">
                                    {data.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* cols four links */}
                <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                  <div>
                    <div className="flex items-center gap-3 ">
                      <FaLocationArrow/>
                      <p>Nodia , Uttar Pradesh</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <FaMobileAlt/>
                      <p>+92 12354567890</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                      <a href="https://www.instagram.com/fizaazam1234/">
                        <FaInstagram className="text-3xl hover:text-primary duration-300"/>
                      </a>
                      <a href="https://www.linkedin.com/in/fizza-azam-34749821b/">
                        <FaLinkedin className="text-3xl hover:text-primary duration-300"/>
                      </a>
                      <a href="https://www.facebook.com/profile.php?id=100012678150667">
                        <FaFacebook className="text-3xl hover:text-primary duration-300"/>
                      </a>
                      <a href="https://github.com/fizza897?tab=repositories">
                        <FaGithub className="text-3xl hover:text-primary duration-300"/>
                      </a>
                    </div>
                  </div>
                </div>
  
            </div>
            
            

          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
