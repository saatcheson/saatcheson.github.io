"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import About from "./components/about";
import Publications from "./components/publications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Teaching from "./components/teaching";

export default function Home() {
  const [page, setPage] = useState("about");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
      return;
    }

    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(preferredTheme);
    document.documentElement.setAttribute("data-theme", preferredTheme);
  }, []);

  const load = (key) => {
    setPage(key);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme", nextTheme);
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
                src="/icon.jpg"
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
            <button
              onClick={toggleTheme}
              className="theme-toggle mb-4 hover:cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                size="sm"
                className="pr-2"
              />
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
            <nav>
              <ul className="text-3xl">
                <li>
                  <button
                    onClick={() => load("about")}
                    className="nav-link w-full text-left py-1 hover:cursor-pointer"
                    aria-pressed={page === "about"}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => load("publications")}
                    className="nav-link w-full text-left py-1 hover:cursor-pointer"
                    aria-pressed={page === "publications"}
                  >
                    Publications
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => load("teaching")}
                    className="nav-link w-full text-left py-1 hover:cursor-pointer"
                    aria-pressed={page === "teaching"}
                  >
                    Teaching
                  </button>
                </li>
                <li>
                  <a
                    href="/Curriculum_Vitae.pdf"
                    className="nav-link block w-full text-left py-1 hover:cursor-pointer"
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
