"use client";
import Image from "next/image";
import "./globals.css";
import { LinkedIn, GitHub, Gmail } from "./components/icons/icons";
import { tecnologias, proyectos } from "./constantes";
import {
  AppWindow,
  ArrowUpRight,
  Code,
  Server,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  return active;
}

export default function Home() {
  const [acordeones, setAcordeones] = useState({
    1: false,
    2: false,
    3: false,
  });
  const active = useActiveSection(["home", "projects", "contact"]);
  return (
    <>
      <nav className="flex mx-auto md:my-5 z-20 h-12 w-full md:w-3/5 justify-center fixed bottom-0 md:top-5 md:visible left-1/2 -translate-x-1/2">
        <ul className="flex border-x-1 border-t-1 md:border-1 border-purple-500 md:border-[#1f1f1f] rounded-t-xl md:rounded-full w-full justify-around md:justify-between md:space-x-6 md:justify-center md:gap-12 gap-6 items-center backdrop-blur-md">
          <li className="flex flex-row items-center gap-1 text-white transition-colors text-xs md:text-base relative group">
            <a className="flex gap-5 items-center cursor-pointer" href="#home">
              <div
                className={`${
                  active === "home" ? "visible" : "invisible"
                } absolute right-16 h-2 w-2 rounded-full bg-[#A9FF5B]`}
              ></div>
              <span>Home</span>
            </a>
          </li>
          <li className="flex flex-row items-center gap-1 text-white transition-colors text-xs md:text-base relative group">
            <a
              className="flex gap-5 items-center cursor-pointer"
              href="#projects"
            >
              <div
                className={`${
                  active === "projects" ? "visible" : "invisible"
                } absolute right-19 h-2 w-2 rounded-full bg-[#A9FF5B]`}
              ></div>
              <span>Projects</span>
            </a>
          </li>
          <li className="flex flex-row items-center gap-1 text-white transition-colors text-xs md:text-base relative group">
            <a
              className="flex gap-5 items-center cursor-pointer"
              href="#contact"
            >
              <div
                className={`${
                  active === "contact" ? "visible" : "invisible"
                } absolute right-20 h-2 w-2 rounded-full bg-[#A9FF5B]`}
              ></div>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-16">
        <section
          className="mt-16 md:mt-0 w-full border-b-1 border-[#9f80b9]"
          id="home"
        >
          <div className="max-w-5xl mx-auto space-y-8 md:py-22 pb-14 overflow-hidden">
            <div className="text-left space-y-4">
              <p className="text-md md:text-lg shiny-white text-[#979797]">
                Hi, I&apos;m Eduardo Valverde
              </p>
              <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-4">
                <h1 className="font-bold text-5xl md:text-6xl text-pretty leading-none">
                  Software <br /> Developer
                </h1>
                <h2 className="text-xl text-[#979797]">
                  2+ years of experience. Systems engineer and web developer.
                  Specialized in bringing your ideas to life.
                </h2>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://github.com/Malvavixco"
                className="text-white text-2xl p-3 border-1 rounded-lg border-[#1f1f1f]"
                target="blank"
              >
                <GitHub />
              </a>
              <a
                href="https://linkedin.com/in/eduardo-valverde-santillan"
                className="text-white text-2xl p-3 border-1 rounded-lg border-[#1f1f1f]"
                target="blank"
              >
                <LinkedIn />
              </a>
              <span className="text-white text-2xl p-3 border-1 rounded-lg border-[#1f1f1f]">
                <Gmail />
              </span>
            </div>
            <div className="w-max flex z-10 gap-16 animate-scroll animate mt-16">
              {tecnologias.map((tecnologia, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-xl gap-2 duration-300 transition-all"
                >
                  {tecnologia.icono}
                  <span className="text-lg font-lg">{tecnologia.nombre}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-5xl mx-auto space-y-8 md:py-22 pb-14 overflow-hidden">
            <h1 className="text-3xl font-bold">What I do?</h1>
            <div
              className="border-1 w-full md:w-3/5 rounded-md border-[#9f80b9] p-3 cursor-pointer transition-all duration-700 ease-in"
              onClick={() => {
                setAcordeones({
                  1: !acordeones[1],
                  2: false,
                  3: false,
                });
              }}
            >
              <span className="flex">
                <AppWindow className="mr-3" /> Web Development
              </span>
              <div
                className={`
      overflow-hidden transition-all duration-700 ease-in
      ${acordeones[1] ? "max-h-40 opacity-100 p-3" : "max-h-0 opacity-0"}
    `}
              >
                <ul>
                  <li>Single Page Application (SPAs)</li>
                  <li>Multiple Page Application (MPAs)</li>
                  <li>Landing Pages</li>
                </ul>
              </div>
            </div>
            <div
              className="border-1 w-full md:w-3/5 rounded-md border-[#9f80b9] p-3 cursor-pointer transition-all duration-700 ease-in"
              onClick={() => {
                setAcordeones({
                  1: false,
                  2: !acordeones[2],
                  3: false,
                });
              }}
            >
              <span className="flex">
                <Server className="mr-3" /> API Development
              </span>
              <div
                className={`
      overflow-hidden transition-all duration-700 ease-in
      ${acordeones[2] ? "max-h-40 opacity-100 p-3" : "max-h-0 opacity-0"}
    `}
              >
                <ul>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div
              className="border-1 w-full md:w-3/5 rounded-md border-[#9f80b9] p-3 cursor-pointer transition-all duration-700 ease-in"
              onClick={() => {
                setAcordeones({
                  1: false,
                  2: false,
                  3: !acordeones[3],
                });
              }}
            >
              <span className="flex">
                <Smartphone className="mr-3" />
                Mobile Development
              </span>
              <div
                className={`
      overflow-hidden transition-all duration-700 ease-in
      ${acordeones[3] ? "max-h-40 opacity-100 p-3" : "max-h-0 opacity-0"}
    `}
              >
                <ul>
                  <li>React Native mobile apps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full border-b-1 border-[#9f80b9]" id="projects">
          <div className="max-w-5xl mx-auto space-y-8 pb-14 overflow-hidden">
            <span className="my-10 text-[#fe10f1]">My work</span>
            <h1 className="text-5xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proyectos.map((proyecto, index) => (
                <div
                  key={index}
                  className="group w-fit overflow-hidden rounded-md"
                >
                  <div className="group relative w-[400px] overflow-hidden rounded-md hover:border-[#9f80b9]">
                    <Link href={proyecto.url} target="blank">
                      <Image
                        src={proyecto.urlImg}
                        width={400}
                        height={350}
                        alt={`Image of the ${proyecto.nombre}`}
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />

                      <div
                        className="absolute inset-0 flex flex-col p-5 justify-end
                    bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 ease-in-out"
                      >
                        <h3 className="text-xl font-bold  mb-2">
                          {proyecto.nombre}
                        </h3>
                        <div className="flex gap-3">
                          {proyecto.tecnoligis.map((tecnologia, index) => (
                            <span
                              key={index}
                              className="text-white rounded-full border-2 py-1 px-3 bg-[#a80099]/50 border-[#fe10f1]"
                            >
                              {tecnologia}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="m-3 flex flex-col">
                      <span className="text-2xl font-bold">
                        {proyecto.nombre}
                      </span>
                      <span className="font-light">{proyecto.estado}</span>
                    </div>
                    <div className="flex">
                      <Link href={proyecto.urlGitHub} target="blank">
                        <span className="hover:bg-[#1f1f1f] p-3 block rounded-lg">
                          <Code size={35} />
                        </span>
                      </Link>
                      <Link href={proyecto.url} target="blank">
                        <span className="hover:bg-[#1f1f1f] p-3 block rounded-lg">
                          <ArrowUpRight size={35} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full " id="contact">
          <div className="max-w-5xl mx-auto space-y-8 pb-14 overflow-hidden">
            <span className="my-10 text-[#fe10f1]">
              Let&apos;s start creating
            </span>
            <h1 className="text-5xl font-bold">Contact</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <form action="" className="flex flex-col p-1 space-y-6">
                <div className="flex flex-col">
                  <label className="mb-2">Name</label>
                  <input
                    className="p-3 border-1 border-[#9f80b9] rounded-lg text-gray-300"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Email</label>
                  <input
                    className="p-3 border-1 border-[#9f80b9] rounded-lg text-gray-300"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2">Message</label>
                  <textarea
                    className="p-3 border-1 border-[#9f80b9] rounded-lg text-gray-300 min-h-36"
                    name=""
                    id=""
                    placeholder="Tell me about your project"
                  ></textarea>
                </div>
                <button className="bg-[#ce00be] text-white text-xl py-3 rounded-md cursor-pointer hover:bg-[#a80099] transition ease-in">
                  Send Message
                </button>
              </form>
              <div className="">
                <h3 className="text-3xl mb-3 text-[#fe10f1]">Work with me</h3>
                <span>
                  Available for freelance projects, collaborations, or just to
                  ask
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
