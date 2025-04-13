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
  School,
} from "lucide-react";
import { ReactNode, useState } from "react";

export default function PortfolioBody() {
  const [home, setBackToHome] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [contact, setContact] = useState(false);

  const skillBtnStyle =
    "border border-rose-400 text-teal-600 rounded-xl m-2 p-2 italic font-bold hover:bg-teal-800 hover:text-rose-500";
  const flipcardStyle =
    "border border-teal-600 rounded min-w-64 mb-4 px-4 py-2 text-rose-400 hover:bg-rose-900 cursor-pointer hover:text-teal-100";
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 py-8 gap-12 flex-wrap">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* Flip Card */}
        <div
          className="w-72 sm:w-80 md:w-[300px] lg:w-[400px] h-[400px] perspective cursor-pointer"
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
              {[
                ["Skills", () => setSkills(true)],
                ["Experience", () => setExperience(true)],
                ["Education", () => setEducation(true)],
                ["My Contact", () => setContact(true)],
                ["Back to Home", () => setBackToHome(true)],
              ].map(([label, action]) => (
                <button
                  key={label as string}
                  className={flipcardStyle}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSkills(false);
                    setExperience(false);
                    setEducation(false);
                    setContact(false);
                    setBackToHome(false);
                    (action as () => void)(); // ✅ invoke the action function
                  }}
                >
                  {label as ReactNode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="flex flex-col gap-8 w-full max-w-6xl">
          {/* Home Section */}
          <div className={`px-4 ${home ? "" : "hidden"}`}>
            <p className="text-lg text-rose-400">Hi!! My name is</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-400 mb-2">
              Rakshith Manjunath
            </h1>
            <h2 className="text-2xl sm:text-3xl italic text-teal-300 mb-8">
              I build things for the web
            </h2>
            <p className="text-base text-slate-300 mt-2 max-w-180">
              I’m a passionate full stack developer with 4+ years of experience
              building high-performance, scalable web apps using React, Node.js,
              and GraphQL. I love turning ideas into clean, functional user
              interfaces<span className="text-rose-400">.</span>
            </p>
            <p className="text-base text-slate-300 mt-2 mb-8">
              Outside of tech, you&apos;ll find me cooking, sketching, biking,
              writing poetry, or enjoying a dive in the pool
              <span className="text-rose-400">.</span>
            </p>
            <p className="text-sm text-slate-500 italic mt-2">
              Click my picture to know more about me
            </p>
          </div>

          {/* Skills Section */}
          <div
            className={`border border-teal-600 rounded p-4 md:p-8 ${
              skills ? "" : "hidden"
            }`}
          >
            <h1 className="text-2xl font-bold text-rose-400 mb-4">Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[
                "Javascript",
                "Typescript",
                "HTML/CSS",
                "TailwindCSS",
                "NextJs",
                "ExpressJs",
                "ReactJs",
                "NodeJs",
                "GraphQL",
                "Redux",
                "Jest",
                "Gherkins & cucumber",
                "Java",
                "SQL",
                "Docker",
                "Git",
              ].map((skill) => (
                <button key={skill} className={skillBtnStyle}>
                  {skill}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div
            className={`bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 text-slate-200 space-y-8 ${
              contact ? "" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-semibold text-rose-400 mb-4">
              Contact Info
            </h2>
            {[
              [Phone, "+91 96329 03172"],
              [Mail, "mrakshith.08@gmail.com"],
              [Instagram, "@raksh_kash"],
              [Home, "Hosakote, Bangalore (Rural), Karnataka, India"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center space-x-4">
                <Icon className="text-teal-400" />
                <span className="text-base">{text as ReactNode}</span>
              </div>
            ))}
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

          {/* Experience Section */}
          <div
            className={`bg-slate-800 rounded-2xl p-5 shadow-2xl border border-slate-700 text-slate-200 space-y-6 ${
              experience ? "" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-teal-400" />
              Corporate Experience
            </h2>
            {/* Repeatable Experience Block */}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                    <CircleDot className="w-4 h-4 text-rose-400" />
                    {i === 0 ? "Full Stack Developer" : "Associate Consultant"}
                  </h3>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-sm text-slate-400 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {i === 0
                      ? "Citiustech Healthcare pvt ltd."
                      : "Wipro pvt ltd."}
                  </span>
                  <span>
                    {i === 0 ? "Nov 2021 - Present" : "Mar 2021 - Nov 2021"}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
                  <li>
                    {i === 0
                      ? "Developed scalable web apps using React & Node.js"
                      : "Analyzed and resolved day-to-day production issues"}
                  </li>
                  <li>
                    {i === 0
                      ? "Integrated GraphQL APIs and built custom hooks"
                      : "Identified, debugged, and fixed critical bugs"}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div
            className={`bg-slate-800 rounded-2xl p-4 shadow-2xl border border-slate-700 text-slate-200 space-y-2 ${
              education ? "" : "hidden"
            }`}
          >
            <h2 className="text-2xl font-bold text-rose-400 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-teal-400" />
              Education
            </h2>
            {/* Reuse card for Education */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-900 rounded-xl p-4 border border-slate-600 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-teal-300 flex items-center gap-2">
                    <CircleDot className="w-4 h-4 text-rose-400" />
                    {["B.E. in Computer Science", "PUC [PCMB]", "SSLC"][i]}
                  </h3>
                  <Calendar className="w-4 h-4 text-slate-400" />
                </div>
                <div className="text-sm text-slate-400 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <School className="w-4 h-4" />
                    {
                      [
                        "Kalpataru Institute of Technology, Tiptur",
                        "Kalpataru Pre-University College, Tiptur",
                        "Kalpataru Central School, Tiptur",
                      ][i]
                    }
                  </span>
                  <span>
                    {["2016 - 2020", "2014 - 2016", "2013 - 2014"][i]}
                  </span>
                </div>
                <ul className="list-disc list-inside text-sm mt-2 text-slate-300 space-y-1">
                  <li>
                    {
                      [
                        "Graduated with 75%",
                        "Passed with 85%",
                        "Passed with 85%",
                      ][i]
                    }
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
