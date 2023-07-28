import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import Doggo from '../../public/images/assets/doggo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base '>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
      <div className='flex flex-col items-center md:flex-col md:py-2'>
          <p className='mb-5 md:mb-0'>Phone Number</p>
          <p className='mb-5 md:mb-0'>Email</p>
          <p>Address</p>
        </div>
        <div className='flex flex-col items-center lg:flex-col lg:py-2'>
          <p className='mb-5 sm:mb-0'>Get In Touch</p>
          <p>Terms And Conditions</p>
        </div>
        {/* Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>by&nbsp; */}
        {/* <Link href='/' className='underline underline-offset-2'
            target={'_blank'}>CodeBucks</Link> */}

        <div className='flex flex-col items-center md:flex-col md:py-2'>
          <p className='mb-5 sm:mb-0'>Get us a Shout</p>
          <Image src={Doggo} alt="Doggo" className='w-32 h-32' />
        </div>

      </Layout>
     <div className="flex items-center justify-center">
  <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
</div>
    </footer>
  )
}

export default Footer