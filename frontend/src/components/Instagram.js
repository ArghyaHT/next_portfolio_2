import React from 'react'
import Image1 from '../../public/images/assets/ins1.png'
import Image2 from '../../public/images/assets/ins2.png'
import Image3 from '../../public/images/assets/ins3.png'
import Image4 from '../../public/images/assets/ins4.png'
import Image from 'next/image'
import Layout from './Layout'

const Instagram = () => {
    return (
        <Layout className='my-16'>
            <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
                Follow us on Instagram
            </h2>
            <div className='flex flex-wrap gap-5 justify-between md:flex-col md:items-center'>
            <div className="w-1/5 md:w-full">
        <Image
          src={Image1}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/5 md:w-full">
        <Image
          src={Image2}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-1/5 md:w-full">
        <Image
          src={Image3}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-1/5 md:w-full">
        <Image
          src={Image4}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

            </div>
        </Layout>
    )
}

export default Instagram