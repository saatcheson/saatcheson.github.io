"use client";

import { useState } from "react";
import Image from "next/image";
import About from "./components/about";
import Publications from "./components/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Teaching from "./components/teaching";

export default function Home() {
  const [page, setPage] = useState("about");

  const load = (key) => {
    setPage(key);
  };

  const renderPage = () => {
    switch (page) {
      case "about":
        return <About />;
      case "publications":
        return <Publications />;
      case "teaching":
        return <Teaching />;
      // Add other pages like teaching, cv here as needed
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-row pt-10 pl-30 pr-30">
      <div className="w-1/3 border-r">
        
        {/* profile pic */}
        <Image
          className="w-95/100 h-auto mb-3"
          src="/outdoor-headshot.jpg"
          width={1024}
          height={1024}
          alt="Alex at Plitvice National Park in Croatia"
        />
        <h1 className="text-5xl mb-2">Alex Atcheson</h1>
        
        {/* contact info */}
        <ul>
          <li>
            <p>
              <FontAwesomeIcon 
                icon={faEnvelope}
                size="lg"
                className="pr-2"
              />
              samuela7 [at] illinois [dot] edu
            </p>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="w-2/3 pl-4">
        <div className="mb-14">
          <nav>
            <ul className="text-3xl">
              <li>
                <button
                  onClick={() => load("about")}
                  className={`w-full text-left py-1 ${page === "about" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                  aria-pressed={page === "about"}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => load("publications")}
                  className={`w-full text-left py-1 ${page === "publications" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                  aria-pressed={page === "publications"}
                >
                  Publications
                </button>
              </li>
              <li>
                <button
                  onClick={() => load("teaching")}
                  className={`w-full text-left py-1 ${page === "teaching" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                  aria-pressed={page === "teaching"}
                >
                  Teaching
                </button>
              </li>
              <li>
                <a
                  href="/Curriculum_Vitae.pdf"
                  className="block w-full text-left py-1 hover:bg-black hover:text-white hover:cursor-pointer"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
