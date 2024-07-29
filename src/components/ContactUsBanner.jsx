import React from 'react'
import Phone from '../img/tel.png'

const ContactUsBanner = () => {
  return (
    <div className='w-full bg-[#00bb00] fixed bottom-0 py-[10px] flex justify-center items-center text-white text-[1.5em] animate-bg-gradient z-10'>
    <img src={Phone} alt="phone" className='mr-[10px] w-[24px] h-[24px]' />+48 123 456 789
    </div>
  )
}

export default ContactUsBanner