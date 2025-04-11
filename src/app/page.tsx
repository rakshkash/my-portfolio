"use client";

import { Sun, Moon } from "lucide-react";
import {
  Phone,
  Mail,
  Instagram,
  Home,
  Github,
  Briefcase,
  Calendar,
  Building2,
  CircleDot,
  GraduationCap,
  School
} from "lucide-react";
import { useEffect, useState } from "react";
import "./globals.css";

export default function MyHome() {
  const [home, setBackToHome] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [contact, setContact] = useState(false);

  const skillBtnStyle =
    "border border-rose-400 text-teal-600 rounded-xl m-4 p-2 italic font-bold";
  const flipcardStyle =
    "border border-teal-600 rounded min-w-64 mb-4 px-4 py-2 text-rose-400 hover:bg-rose-900 cursor-pointer hover:text-teal-100";

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="min-h-screen transition-colors duration-300 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white dark:text-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <header className="p-6 flex justify-between items-center shadow-md">
        <div className="text-3xl font-bold text-rose-400 tracking-wider flex items-center space-x-1">
          <span className="text-teal-400 animate-pulse">&lt;</span>
          <span>RakshKash</span>
          <span className="text-teal-500 animate-bounce">/</span>
          <span className="text-teal-400 animate-pulse">&gt;</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:mrakshith.08@gmail.com?subject=Portfolio Inquiry&body=Hi Rakshith"
            target="_blank"
            className="hover:text-rose-400 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/rakshith-manjunath/"
            target="_blank"
            className="hover:text-rose-400 transition"
          >
            LinkedIn
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-teal-400 hover:text-rose-400 transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <section className="flex flex-row lg:flex-row items-center justify-around px-8 py-8 gap-12">
        <div className="flex flex-row mt-16">
          <div
            className="w-[400px] h-[400px] perspective cursor-pointer"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src="/resources/photographs/raksh-01.jpg"
                  alt="raksh"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col justify-center items-center p-4 text-slate-200">
                <h2 className="text-xl font-semibold text-rose-400 mb-4">
                  About Me
                </h2>
                <button
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flipping
                    setSkills(true);
                    setBackToHome(false);
                    setContact(false);
                    setEducation(false);
                    setExperience(false);
                  }}
                >
                  Skills
                </button>
                <button
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flipping
                    setExperience(true);
                    setSkills(false);
                    setBackToHome(false);
                    setContact(false);
                    setEducation(false);
                  }}
                >
                  Experience
                </button>
                <button
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flipping
                    setEducation(true);
                    setSkills(false);
                    setExperience(false);
                    setBackToHome(false);
                    setContact(false);
                  }}
                >
                  Education
                </button>
                <button
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flipping
                    setContact(true);
                    setSkills(false);
                    setBackToHome(false);
                    setEducation(false);
                    setExperience(false);
                  }}
                >
                  My contact
                </button>
                <button
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent flipping
                    setSkills(false);
                    setBackToHome(true);
                    setContact(false);
                    setEducation(false);
                    setExperience(false);
                  }}
                >
                  back to home
                </button>
              </div>
            </div>
          </div>
          {/* main card */}
          <div
            className={`max-w-4xl space-y-6 text-left ml-16 pt-8 ${
              home ? "" : "hidden"
            }`}
          >
            <p className="text-lg text-rose-400">Hi!! My name is</p>
            <h1 className="text-5xl font-extrabold text-teal-400">
              Rakshith Manjunath
            </h1>
            <h2 className="text-3xl italic text-teal-300">
              I build things for the web
            </h2>
            <p className="text-base text-slate-300">
              I’m a passionate full stack developer with 4+ years of experience
              building high-performance, scalable web apps using React, Node.js,
              and GraphQL. I love turning ideas into clean, functional user
              interfaces<span className="text-rose-400">.</span>
            </p>
            <p className="text-base text-slate-300">
              Outside of tech, you&apos;ll find me cooking, sketching, biking,
              writing poetry, or enjoying a dive in the pool
              <span className="text-rose-400">.</span>
            </p>
            <p className="text-base text-slate-500 italic">
              click my picture to know more about me{" "}
            </p>
          </div>
          {/* skill card*/}
          <div
            className={`min-w-3xl space-y-6 text-left ml-16 pt-8 border border-teal-600 rounded p-8 ${
              skills ? "" : "hidden"
            }`}
          >
            <h1 className="text-2xl font-bold  text-rose-400 mb-4">skills</h1>
            <div className="grid grid-cols-4">
              <button className={skillBtnStyle}>Javascript</button>
              <button className={skillBtnStyle}>Typescript</button>
              <button className={skillBtnStyle}>HTML/CSS</button>
              <button className={skillBtnStyle}>TailwindCSS</button>
              <button className={skillBtnStyle}>NextJs</button>
              <button className={skillBtnStyle}>ExpressJs</button>
              <button className={skillBtnStyle}>ReactJs</button>
              <button className={skillBtnStyle}>NodeJs</button>
              <button className={skillBtnStyle}>GraphQL</button>
              <button className={skillBtnStyle}>Redux</button>
              <button className={skillBtnStyle}>Jest</button>
              <button className={skillBtnStyle}>Gherkins & cucumber</button>
              <button className={skillBtnStyle}>Java</button>
              <button className={skillBtnStyle}>SQL</button>
              <button className={skillBtnStyle}>Docker</button>
              <button className={skillBtnStyle}>Git</button>
            </div>
          </div>

          {/* contact card */}
          <div
            className={`min-w-xl mx-8 bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 text-slate-200 space-y-4 ${
              contact ? "" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-semibold text-rose-400 mb-4 text-center">
              Contact Info
            </h2>

            <div className="flex items-center space-x-4">
              <Phone className="text-teal-400" />
              <span className="text-base">+91 96329 03172</span>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-teal-400" />
              <span className="text-base">mrakshith.08@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4">
              <Instagram className="text-teal-400" />
              <span className="text-base">@raksh_kash</span>
            </div>

            <div className="flex items-center space-x-4">
              <Home className="text-teal-400" />
              <span className="text-base">
                Hosakote, Bangalore (Rural), Karnataka, India
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Github className="text-teal-400" />
              <a
                href="https://github.com/rakshith-manjunath"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/rakshkash
              </a>
            </div>
          </div>

          {/* Work experience */}
          <div
            className={`min-w-4xl mx-8 bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 text-slate-200 space-y-6 ${
              experience ? "" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-teal-400" />
              Corporate Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                    <CircleDot className="w-4 h-4 text-rose-400" />
                    Full Stack Developer
                  </h3>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-sm text-slate-400 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    Citiustech Healthcare pvt ltd.
                  </span>
                  <span>Nov 2021 - Present</span>
                </div>
                <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
                  <li>Developed scalable web apps using React & Node.js</li>
                  <li>Integrated GraphQL APIs and built custom hooks</li>
                  <li>Collaborated with UI/UX teams for design consistency</li>
                  <li>Optimized performance and accessibility</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              {/* Experience Block */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                    <CircleDot className="w-4 h-4 text-rose-400" />
                    Associate consultant
                  </h3>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-sm text-slate-400 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    Wipro pvt ltd.
                  </span>
                  <span>March 2021 - Nov 2021</span>
                </div>
                <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
                  <li>
                    {" "}
                    Analyzed and resolved day-to-day production issues, ensuring
                    system stability and smooth operations.
                  </li>
                  <li>
                    Identified, debugged, and fixed critical bugs, improving
                    application performance.
                  </li>
                  <li>
                    Diagnosed, validated, and resolved data and inventory
                    issues, ensuring data integrity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
            {/** Education */}
          <div className={`min-w-4xl mx-8  bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 text-slate-200 space-y-6 ${
              education ? "" : "hidden"
            }`}>
      <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-teal-400" />
        Education
      </h2>

      <div className="space-y-4">
        <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
              <CircleDot className="w-4 h-4 text-rose-400" />
              B.E. in Computer Science
            </h3>
            <Calendar className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-sm text-slate-400 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <School className="w-4 h-4" />
              Kalpataru Institute of Technology, Tiptur
            </span>
            <span>2016 - 2020</span>
          </div>
          <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
            <li>Graduated with 75%</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
              <CircleDot className="w-4 h-4 text-rose-400" />
              PUC [PCMB]
            </h3>
            <Calendar className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-sm text-slate-400 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <School className="w-4 h-4" />
              Kalpataru Pre-University College, Tiptur
            </span>
            <span>2014 - 2016</span>
          </div>
          <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
            <li>Passed with 85%</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
              <CircleDot className="w-4 h-4 text-rose-400" />
              SSLC
            </h3>
            <Calendar className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-sm text-slate-400 flex justify-between items-center">
            <span className="flex items-center gap-1">
              <School className="w-4 h-4" />
              Kalpataru Central School, Tiptur
            </span>
            <span>2013 - 2014</span>
          </div>
          <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
            <li>Passed with 85%</li>
          </ul>
        </div>

      </div>
    </div>

        </div>
      </section>

      <footer className="text-center text-sm text-slate-400 pb-4">
        © {new Date().getFullYear()} Raksh. All rights reserved.
      </footer>
    </main>
  );
}
