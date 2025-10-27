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
    <div className="container p-10">
      <div className="row">
        <aside className="col-1-3 border-r pr-5">
            {/* profile header: image + name/contact (stacked on desktop, row on small screens) */}
            <div className="profile-header">
              <Image
                className="profile-image"
                src="/profile_pic.jpg"
                width={400}
                height={400}
                alt="Alex at Plitvice National Park in Croatia"
              />

              <div className="profile-info">
                <h1>Alex Atcheson</h1>
                {/* contact info */}
                <ul>
                  <li>
                    <p>
                      <FontAwesomeIcon 
                        icon={faEnvelope}
                        size="md"
                        className="pr-2"
                      />
                      samuela7 [at] illinois [dot] edu
                    </p>
                  </li>
                </ul>
              </div>
            </div>
        </aside>

        {/* content */}
        <main className="col-2-3 pl-2">
          <div className="mb-10">
            <nav>
              <ul className="text-3xl">
                <li>
                  <button
                    onClick={() => load("about")}
                    className={`nav-link w-full text-left py-1 ${page === "about" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                    aria-pressed={page === "about"}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => load("publications")}
                    className={`nav-link w-full text-left py-1 ${page === "publications" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                    aria-pressed={page === "publications"}
                  >
                    Publications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => load("teaching")}
                    className={`nav-link w-full text-left py-1 ${page === "teaching" ? "bg-black text-white" : "hover:bg-black hover:text-white"} hover:cursor-pointer`}
                    aria-pressed={page === "teaching"}
                  >
                    Teaching
                  </button>
                </li>
                <li>
                  <a
                    href="/Curriculum_Vitae.pdf"
                    className="nav-link block w-full text-left py-1 hover:bg-black hover:text-white hover:cursor-pointer"
                  >
                    Curriculum Vitae
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section>
            {renderPage()}
          </section>
        </main>
      </div>
    </div>
  );
}
