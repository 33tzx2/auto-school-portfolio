import React from 'react'
import { useTranslation } from 'react-i18next';
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import FooterLocation from '../img/icons/footerLocation.png'
import FooterPhone from '../img/icons/footerPhone.png'
import FooterEmail from '../img/icons/footerEmail.png'

const Footer = () => {
  const {t} = useTranslation()

  return (
    <div className='bg-[#00132c] w-full flex flex-col lg:flex-row px-[40px] pt-[40px] pb-[90px] justify-between items-center'>
        <Link to='/'><img src={Logo} alt="logo" className='  max-w-[200px] max-h-[83px] self-center mb-[20px]'/></Link>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-row mx-[25px] my-[15px] lg:my-0'>
            <img src={FooterPhone} alt="tel" className='w-[24px] h-[24px] mr-[5px] mt-[5px]'/>
            <div className='flex flex-col'>
              <div className='text-[1.3em] text-white'>{t('ТЕЛЕФОН')}</div>
              <Link className='text-[1.1em] text-[#0378db]'>796 000 000</Link>
              <Link className='text-[1.1em] text-[#0378db]'>501 000 000</Link>
            </div>
          </div>
          <div className='flex flex-row mx-[25px] my-[15px] lg:my-0'>
            <img src={FooterEmail} alt="tel" className='w-[24px] h-[24px] mr-[5px] mt-[5px]'/>
            <div className='flex flex-col'>
              <div className='text-[1.3em] text-white'>{t('ЭЛЕКТРОННАЯ ПОЧТА')}</div>
              <Link className='text-[1.1em] text-[#0378db]'>exemple@auto-school.pl</Link>
            </div>
          </div>
          <div className='flex flex-row mx-[25px] my-[15px] lg:my-0'>
            <img src={FooterLocation} alt="tel" className='w-[24px] h-[24px] mr-[5px] mt-[5px]'/>
            <div className='flex flex-col'>
              <div className='text-[1.3em] text-white'>{t('АДРЕС')}</div>
              <Link className='text-[1.1em] text-[#0378db] max-w-[200px]'>{t('Автошкольная ул.123')}</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer