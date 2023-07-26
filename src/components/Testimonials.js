import React from 'react'
import Testimonial from "../../public/images/assets/testimonials.png"
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className='my-32'>
            <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
                Testimonials
            </h2>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
  <div className="absolute top-0 -right-3 -z-10 w-1/4 rounded-[2rem] bg-dark dark:bg-light" />
  <Image
    src={Testimonial}
    alt="CB"
    className="w-full h-auto rounded-2xl"
    priority
    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
  />
</div>

        </div>
    )
}

export default Testimonials