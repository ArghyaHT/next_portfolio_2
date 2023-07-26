import React from 'react'
import Image1 from '../../public/images/assets/ins1.png'
import Image2 from '../../public/images/assets/ins2.png'
import Image3 from '../../public/images/assets/ins3.png'
import Image4 from '../../public/images/assets/ins4.png'
import Image from 'next/image'

const Instagram = () => {
    return (
        <div className='my-32'>
            <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
                Follow us on Instagram
            </h2>
            <div className='flex flex-wrap gap-5 justify-between'>
            <div className="w-1/5">
        <Image
          src={Image1}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/5">
        <Image
          src={Image2}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-1/5">
        <Image
          src={Image3}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="w-1/5">
        <Image
          src={Image4}
          alt="CB"
          className="w-full h-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

            </div>
        </div>
    )
}

export default Instagram