// import AnimatedText from "@/components/AnimatedText";
// import { GithubIcon } from "@/components/Icons";
// import Layout from "@/components/Layout";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import product1 from "../../public/images/assets/dog.png"
// import product2 from "../../public/images/assets/cat1.png"

// import {motion} from "framer-motion"
// import TransitionEffect from "@/components/TransitionEffect";

// const FramerImage = motion(Image)

// const FeaturedProduct = ({ type, title, summary, img, link, github, listItems }) => {
//   return (
//     <article className="w-full flex items-center justify-between rounded-br-2xl
//     rounded-3xl border border-solid border-dark bg-light dark:bg-dark
//      dark:border-light shadow-2xl p-12 relative
//      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      
//       <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
//       rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
//       <Link href={link} target="_blank"
//       className="w-1/2 cursor-pointer  overflow-hidden rounded-lg lg:w-full md:flex md:justify-center md:items-center">
//         <FramerImage src={img} alt={title} className="w-1/2 h-auto ml-32 mt-6 md:ml-0 md:mt-0 md:items-center"
//         whileHover={{scale:1.05}}
//         transition={{duration:0.2}}
//         priority
//               sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               50vw" />
//       </Link>

//       <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full 
//       lg:pl-0 lg:pt-6">
        
//         <span className="text-primary dark:text-primaryDark font-medium text-xl
//         xs:text-base">{type}</span>
        
//         <Link href={link} target="_blank"
//         className="hover:underline underline-offset-2">
//           <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light
//           sm:text-sm">{title}</h2>
//         </Link>

//         <ul className="my-2 font-medium text-dark dark:text-light sm:text-sm">
//       {listItems.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//     <p className="my-2 font-medium text-dark dark:text-light  sm:text-sm">{summary}</p>
//         <div className="mt-2 flex items-center">
        
//         <Link href={link} target="_blank"
//         className="ml-0 rounded-lg border border-dark bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg
//         font-semibold hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
//         sm:px-4 sm:text-base">Buy Now</Link>
//         </div>
        
//       </div>
//     </article>
//   );
// };

// // const Project =({title, type, img, link, github}) => {
// //     return(
// //         <article className="w-full flex flex-col items-center justify-center rounded-2xl
// //         border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative
// //         xs:p-4">

// // <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
// //       rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
// //             <Link href={link} target="_blank"
// //       className="w-full cursor-pointer  overflow-hidden rounded-lg">
// //         <Image src={img} alt={title} className="w-full h-auto" />
// //       </Link>

// //       <div className="w-full flex flex-col items-start justify-between mt-4">
        
// //         <span className="text-primary dark:text-primaryDark font-medium text-xl
// //         lg:text-lg md:text-base">{type}</span>
        
// //         <Link href={link} target="_blank"
// //         className="hover:underline underline-offset-2">
// //           <h2 className="my-2 w-full text-left text-2xl font-bold
// //           lg:text-2xl ">{title}</h2>
// //         </Link>

// //         <div className="w-full mt-2 flex items-center justify-between">

// //         <Link href={link} target="_blank"
// //         className="rounded-lg text-lg
// //         font-semibold underline
// //         md:text-base">Visit</Link>
// //             <Link href={github} target="_blank"
// //             className="w-8 md:w-6"> <GithubIcon /> </Link>
        
        
// //         </div>
        
// //       </div>
// //         </article>
// //     )
// // }
// const projects = () => {
//   return (
//     <>
//       <Head>
//         <title>Shop Page</title>
//         <meta name="description" content="any description" />
//       </Head>
//       <TransitionEffect />
//       <main className="w-full mb-16 flex flex-col items-center justify-center
//        dark:text-light">
//         <Layout className="pt-16 ">
//           {/* <AnimatedText text="Imagination Trumps Knowledge!"
//           className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/> */}

//           <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
//           md:gap-y-24 sm:gap-x-0">
//             <div className="col-span-12">
//                 <FeaturedProduct
//                 title = " CherryPops Chicken Jerky"
//                 img={product1}
//                 listItems={[
//                   "- Natural Dog Treat",
//                   "- Hand Made",
//                   "- Intense Flavour",
//                   "- 90gm (Pack of 1)"
//                 ]}
//                 summary="Get it by Sunday, 6th August"
//                 link= "https://www.amazon.in/Cherrypops-Chicken-Jerky-Natural-Handmade/dp/B0BTW11VD5"
//                 github="/"
//                 type="Featured Product"
                
//                 />
               

//             </div>

//             {/* <div className="col-span-6 sm:col-span-12">
//             <Project 
//                 title = " Crypto Screener Application"
//                 img={project1}
//                 summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
//                 It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
//                 local currency."
//                 link= "/"
//                 github="/"
//                 type="Featured Project"
                
//                 />
//             </div> */}

//             {/* <div className="col-span-6 sm:col-span-12">
//             <Project 
//                 title = " Crypto Screener Application"
//                 img={project1}
//                 summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
//                 It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
//                 local currency."
//                 link= "/"
//                 github="/"
//                 type="Featured Project"
                
//                 />
//             </div> */}

//             <div className="col-span-12"> 
//             <FeaturedProduct
//                 title = "CherryPops Fish Bites"
//                 img={product2}
//                 listItems={[
//                   "- Natural Dog Treat",
//                   "- Hand Made",
//                   "- Intense Flavour",
//                   "- 90gm (Pack of 1)"
//                 ]}
//                 summary="Get it by Sunday, 6th August"
//                 link= "https://www.amazon.in/Cherrypops-Fish-Bites-Natural-Handmade/dp/B0BTYSV8CY/ref=sr_1_2?m=AFBKORBP6AVHV&marketplaceID=A21TJRUUN4KGV&qid=1691661801&s=merchant-items&sr=1-2"
//                 github="/"
//                 type="Featured Product"
                
//                 /></div>

//             {/* <div className="col-span-6 sm:col-span-12">  
//             <Project 
//                 title = " Crypto Screener Application"
//                 img={project1}
//                 summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
//                 It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
//                 local currency."
//                 link= "/"
//                 github="/"
//                 type="Featured Project"
                
//                 /></div> */}

//             {/* <div className="col-span-6 sm:col-span-12">  
//             <Project 
//                 title = " Crypto Screener Application"
//                 img={project1}
//                 summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
//                 It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
//                 local currency."
//                 link= "/"
//                 github="/"
//                 type="Featured Project"
                
//                 /></div> */}
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// };

// export default projects;


import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import product1 from "../../public/images/assets/dog.png"
import product2 from "../../public/images/assets/cat1.png"

import {motion} from "framer-motion"
import TransitionEffect from "@/components/TransitionEffect";
import axios from 'axios'

const FramerImage = motion(Image)

const checkoutHandler = async(amount) => {

  const { data:{key} } = await axios.get("http://localhost:4000/api/getkey")

  const { data:{order} } = await axios.post("http://localhost:4000/api/checkout" , {
     amount
  })

  console.log(order)

  var options = {
     key, 
     amount: order.amount, 
     currency: "INR",
     name: "Sagnik Nandy",
     description: "Test Transaction",
     image: "https://avatars.githubusercontent.com/u/25058652?v=4",
     order_id: order.id, 
     callback_url: "http://localhost:4000/api/paymentverification",
     prefill: {
         name: "sagnik",
         email: "sagnik@example.com",
         contact: "9000090000"
     },
     notes: {
         address: "Razorpay Corporate Office"
     },
     theme: {
         color: "#F05151"
     }
 };
 
 const razor = new window.Razorpay(options)
 razor.open()
}

const FeaturedProduct = ({ type, title, summary, img, link, github, listItems,amount }) => {

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  React.useEffect(() => {
    // Load the Razorpay script
    loadScript('https://checkout.razorpay.com/v1/checkout.js').then(() => {
      // Initialize Razorpay here or wherever needed
      // For example, you can create a Razorpay button, handle payments, etc.
      // Refer to Razorpay documentation for integration details
    });
  }, []);
  return (
    <article className="w-full flex items-center justify-between rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light dark:bg-dark
     dark:border-light shadow-2xl p-12 relative
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link href={link} target="_blank"
      className="w-1/2 cursor-pointer  overflow-hidden rounded-lg lg:w-full md:flex md:justify-center md:items-center">
        <FramerImage src={img} alt={title} className="w-1/2 h-auto ml-32 mt-6 md:ml-0 md:mt-0 md:items-center"
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full 
      lg:pl-0 lg:pt-6">
        
        <span className="text-primary dark:text-primaryDark font-medium text-xl
        xs:text-base">{type}</span>
        
        <Link href={link} target="_blank"
        className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light
          sm:text-sm">{title}</h2>
        </Link>

        <ul className="my-2 font-medium text-dark dark:text-light sm:text-sm">
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="my-2 font-medium text-dark dark:text-light  sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
        <p>{amount}</p>
        <button  target="_blank"
        className="ml-0 rounded-lg border border-dark bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg
        font-semibold hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        sm:px-4 sm:text-base" onClick={ () => checkoutHandler(amount) }>Buy Now</button>
        </div>
        
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Shop Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center
       dark:text-light">
        <Layout className="pt-16 ">

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8
          md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
                <FeaturedProduct
                title = " CherryPops Chicken Jerky"
                img={product1}
                listItems={[
                  "- Natural Dog Treat",
                  "- Hand Made",
                  "- Intense Flavour",
                  "- 90gm (Pack of 1)"
                ]}
                summary="Get it by Sunday, 6th August"
                link= "https://www.amazon.in/Cherrypops-Chicken-Jerky-Natural-Handmade/dp/B0BTW11VD5"
                github="/"
                type="Featured Product"
                amount={500}
                checkoutHandler={checkoutHandler}
                />
            </div>

            <div className="col-span-12"> 
            <FeaturedProduct
                title = "CherryPops Fish Bites"
                img={product2}
                listItems={[
                  "- Natural Dog Treat",
                  "- Hand Made",
                  "- Intense Flavour",
                  "- 90gm (Pack of 1)"
                ]}
                summary="Get it by Sunday, 6th August"
                link= "https://www.amazon.in/Cherrypops-Fish-Bites-Natural-Handmade/dp/B0BTYSV8CY/ref=sr_1_2?m=AFBKORBP6AVHV&marketplaceID=A21TJRUUN4KGV&qid=1691661801&s=merchant-items&sr=1-2"
                github="/"
                type="Featured Product"
                amount={1000}
                checkoutHandler={checkoutHandler}
                /></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

