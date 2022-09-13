import React from "react";
import FooterListItems from "./FooterListItems";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  const items = [
    { solutions: ["analytics", "marketing", "commerce", "insights"] },
    { support: ["pricing", "Documentation", "guides", "api status"] },
    { company: ["About", "Blog", "Jobs", "Press", "Careers"] },
    { legal: ["claim", "policy", "terms"] },
  ];

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum
          odio temporibus libero ea deleniti cum perspiciatis eaque facilis,
          sapiente delectus. Pariatur dicta qui libero esse soluta architecto
          autem? Labore.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <FooterListItems title="solutions" items={items[0].solutions} />
        <FooterListItems title="support" items={items[1].support} />
        <FooterListItems title="company" items={items[2].company} />
        <FooterListItems title="legal" items={items[3].legal} />
      </div>
    </div>
  );
};

export default Footer;
