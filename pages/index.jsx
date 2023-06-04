import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineGlobal,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { ViewportProvider } from "../hooks/useViewport";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import varun from '../public/profile.JPG'
// import blob1 from "../public/svg/blob1.svg";
import blob from '../public/svg/'
import Toolkit from "../components/Toolkit";
// import Image from "next/image";
// import { ReactSVG } from "react-svg";
import Blob1Component from '../public/svg/blob1.svg'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
       {/* <div className="bg-image" style={{
          backgroundImage: `url('../public/svg/grid.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
       </div> */}
      {/* <div className="blob1" >
        <Blob1Component />
      </div> */}
      <Head>
        
        <title>Varun Dhand | Web Developer Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/yeet.ico" />
      </Head>
      <ViewportProvider>
        <main className="px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="acme text-xl">DevelopedByVroon</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600  dark:text-teal-400 md:text-6xl font-bold font-burtons">
                VARUN DHAND
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl font-burtons">
                Web Developer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl russo-one">
                I'm a sophomore student deeply passionate about web development.
                I thrive on the perfect fusion of artistic creativity and
                technical finesse, crafting websites that captivate and resonate
                with audiences. Join me down below and let's get cracking!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  href="https://twitter.com/CodeWithVroon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle className="enlarge" />
                </a>
                <a
                  href="https://www.linkedin.com/in/varundhand/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="enlarge" />
                </a>
                <a
                  href="https://www.youtube.com/@iawds75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillYoutube className="enlarge" />
                </a>
                <a
                  href="https://github.com/varundhand"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="enlarge" />
                </a>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 sm:h-48 sm:w-48">
                <Image src={varun} layout="fill" objectFit="cover" />
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">SKILLS</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and
                developer, I've done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div>
              <h3 className="text-3xl py-1 dark:text-white font-burtons font-bold">SKILLS</h3>
            </div>
            <div className="">
              <Toolkit darkMode={darkMode} />
            </div>

            <h3 className="text-3xl py-1 dark:text-white font-burtons font-bold">PROJECTS</h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 relative">
                <div className="group">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web1}
                  />
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href="https://github.com/varundhand/Compresso"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub
                        className="text-5xl transition-opacity duration-300 hover:opacity-75"
                        title="Github Repo Link"
                      />
                    </a>
                    <a
                      href="https://compresso.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* TODO: add title */}
                      <AiOutlineGlobal className="text-5xl" title="" />
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                      Compresso
                    </h4>
                    <p className="text-2xl text-gray-200 font-burtons mayer">
                      Compresso simplifies reading by providing clear and
                      concise summaries of lengthy articles. Save time and
                      effort with this free, open-source tool that prioritizes
                      data security and privacy. Stay informed and grasp the
                      main points effortlessly with Compresso.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <div className="group">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web2}
                  />
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href="https://github.com/varundhand/expense-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub
                        className="text-5xl"
                        title="Github Repo Link"
                      />
                    </a>
                    <a
                      href="https://expense-tracker-webapp-react.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGlobal className="text-5xl" />
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                      Expense Tracker
                    </h4>
                    <p className="text-2xl text-gray-200 font-burtons mayer">
                      Track your income and expenses effortlessly with a
                      minimalist React web app. Gain a clear overview of your
                      financial balances and easily add or subtract income and
                      expenses. Stay organized and manage your budgets
                      effectively with this user-friendly expense tracker.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <div className="group">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web3}
                  />
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href="https://github.com/varundhand/RockPaperScissors-VanillaJs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub
                        className="text-5xl"
                        title="Github Repo Link"
                      />
                    </a>
                    <a
                      href="https://rock-paper-scissors-app-js.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGlobal className="text-5xl" />
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                      Rock Paper Scissors
                    </h4>
                    <p className="text-2xl text-gray-200 font-burtons mayer">
                      Experience the timeless game of Rock Paper Scissors
                      implemented using pure JavaScript. Test your strategy and
                      luck as you engage in this classic game of choices. Enjoy
                      the simplicity and excitement of this interactive web
                      application.
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 flex-1 relative">
                <div className="group">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web4}
                  />
                  <div className="absolute top-4 right-4 flex gap-3">
                    <a
                      href="https://github.com/varundhand/shopping-cart-rtk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub
                        className="text-5xl"
                        title="Github Repo Link"
                      />
                    </a>
                    <a
                      href="https://shopping-cart-rtk.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGlobal className="text-5xl" />
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-2/3 bg-black bg-opacity-50 text-white p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    <h4 className="text-5xl font-bold mb-2 text-teal-300 font-burtons font-bold john">
                      Shopping Cart Webpage
                    </h4>
                    <p className="text-2xl text-gray-200 font-burtons mayer">
                      Discover a seamless shopping experience with Redux
                      Toolkit. Effortlessly add, remove, and manage items in
                      your cart while enjoying automatic total cost calculation.
                      Experience hassle-free online shopping with advanced state
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </ViewportProvider>
    </div>
  );
}
