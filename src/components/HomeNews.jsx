import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import NewSite from '../img/new-site.jpg'
import NewOffers from '../img/new-offers.jpg'
import NewPrice from '../img/price-list.jpg'

const HomeNews = () => {

  const {t} = useTranslation()

  return (
    <div className='flex justify-center bg-[#faf8f8] w-full'>
      <div className='flex flex-col items-center p-[5px] lg:p-[15px] max-w-[1240px] mb-[40px] w-full'>
        <div className='text-[1.75em] lg:text-[2.5em] my-[30px] lg:mb-[40px]'>{t('НОВОСТИ')}</div>
        <div className='flex flex-col lg:flex-row'>
          <Link to='/about-us' className='bg-white max-w-[375px] shadow-md rounded-lg lg:mx-[10px] my-[10px]'>
            <img src={NewSite} alt="new-site" className='w-full h-[250px] rounded-t-lg'/>
            <div className='flex flex-col px-[30px] py-[20px]'>
              <div className='text-[1.25em] font-medium'>{t('Новый сайт')}</div>
              <div className='text-[#a8a8a8] mb-[10px]'>2023-08-29</div>
              <div className='text-[#414247] my-[10px]'>{t('Мы приветствуем вас на нашем новом сайте и приглашаем ознакомиться с текущей [...]')}</div>
              <div className='text-[#414247] my-[10px]'>{t('Читать далее >')}</div>
            </div>
          </Link>
          <Link to='/offers' className='bg-white max-w-[375px] shadow-md rounded-lg lg:mx-[10px] my-[10px]'>
            <img src={NewOffers} alt="new-offers" className='w-full h-[250px] rounded-t-lg'/>
            <div className='flex flex-col px-[30px] py-[20px]'>
              <div className='text-[1.25em] font-medium'>{t('Новые предложения')}</div>
              <div className='text-[#a8a8a8] mb-[10px]'>2023-12-02</div>
              <div className='text-[#414247] my-[10px]'>{t('Мы обновили наши предложения. Можете ознакомиться с новым списком предложений в разделе "предложения".')}</div>
              <div className='text-[#414247] my-[10px]'>{t('Читать далее >')}</div>
            </div>
          </Link>
          <Link to='/price-list' className='bg-white max-w-[375px] shadow-md rounded-lg lg:mx-[10px] my-[10px]'>
            <img src={NewPrice} alt="new-price" className='w-full h-[250px] rounded-t-lg'/>
            <div className='flex flex-col px-[30px] py-[20px]'>
              <div className='text-[1.25em] font-medium'>{t('Прайс лист')}</div>
              <div className='text-[#a8a8a8] mb-[10px]'>2024-01-17</div>
              <div className='text-[#414247] my-[10px]'>{t('2024-01-17 Был обновлен прайс-лист.')}</div>
              <div className='text-[#414247] my-[10px]'>{t('Читать далее >')}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeNews