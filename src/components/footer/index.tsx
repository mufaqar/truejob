import Image from 'next/image'
import React from 'react'
import Logo from '../Logo/Logo';
import Layout from '../Layout/Layout';
import Socials from '../ui/socials';


const Footer1 = () => {
  return (
    <footer className='mt-20'>
      <Layout>
        <div className='flex items-center justify-center flex-col mb-10'>
            <Logo/>
            <p className='mt-4 uppercase text-text text-sm font-poppins text-center'>SUBSCRIBE FOR WEEKLY UPDATES AND EXCLUSIVE OFFERS</p>
            <div className='mt-5 border-b-2 flex border-yellow max-w-[450px] w-full mx-auto'>
              <input name="" className='dark:bg-light-gray bg-[#181818] text-text p-4 w-full outline-none border-none shadow-none focus:outline-none text-sm' placeholder='Your Email...'/>
              <button className="bg-yellow px-10 text-black text-sm uppercase whitespace-nowrap font-oswald">Sign up</button>
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 mt-20 mb-8'>
          <ul className="flex text-text uppercase text-sm gap-6">
            <li className='hover:text-yellow'>Home</li>
            <li className='hover:text-yellow'>Blog</li>
            <li className='hover:text-yellow'>Contact</li>
          </ul>
          <Socials/>
        </div>
        </Layout>
    </footer>
  )
}

export default Footer1