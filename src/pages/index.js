import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";


import profilePic from "../../public/images/profile/HeroImg.png";
import hero1 from "../../public/images/profile/heroimg1.png"
import hero2 from "../../public/images/profile/heroimg2.png"


import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {  LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from "@/components/TransitionEffect";
import ProductEffective from "@/components/ProductEffective";
import Ingreadients from "@/components/ingredients"
import Instagram from "@/components/Instagram"

// import Line from "../../public/images/assets/line.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cherry Pops</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <main className="flex item-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">

            <div className="w-1/2 md:w-full">
              <Image src={profilePic} alt="CB" className="w-full h-auto lg:hidden md:inline-block md:w-full dark:text-light"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center
            ">
              <AnimatedText
                text="We treat Your Pets Right"
                className="!text-5xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:text-xl sm:text-l "
              />

              {/* <p className="my-4 text-base font-medium md:text-small sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p> */}


              <div className="flex items-center self-end mt-2 lg:self-center md:mt-8 ">

              <Image src={hero2} alt="CP" className="w-full h-auto lg:hidden md:inline-block md:w-full"
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />

                <Image src={hero1} alt="CP" className="w-full h-auto translate-x-lg:hidden md:inline-block md:w-full"
                  priority
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />

              
                {/* <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light
              hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto: abcd@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline
                  dark:text-light md:text-base"
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
          <ProductEffective />
          <Ingreadients />
          <Instagram />
        </Layout>

        {/* <div>
          <img src="/images/assets/wave.png" alt="Wave" />
        </div> */}
        <HireMe />

      
      </main>
    </>
  );
}
