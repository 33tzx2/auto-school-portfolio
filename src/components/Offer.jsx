import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
 
const Offer = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center w-full my-[20px]'>
      <h2 className='text-[#0378db] text-[1.75em] lg:text-[2.5em]'>{t('НАШЕ ПРЕДЛОЖЕНИЕ')}</h2>
      <div className='flex flex-col md:flex-row flex-wrap w-full justify-center text-white'>
        <Link to='/driving-courses' className='max-w-full md:max-w-[180px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[342px] lg:w-full min-h-[350px] lg:min-h-[450px] bg-[url(./img/homeOffer/c1.jpg)] bg-no-repeat bg-cover m-[5px]'>
          <div className='hover:bg-black hover:bg-opacity-20 transition duration-400 flex flex-col justify-between p-[20px] h-full'>
            <div className='self-center text-[1.5em] font-semibold text-center'>{t('ВОДИТЕЛЬСКИЕ КУРСЫ')}</div>
            <div className='self-end text-[1.2em]'>{t('Детальнее')} →</div>
          </div>
        </Link>
        <Link to='student-zone' className='max-w-full md:max-w-[180px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[342px] lg:w-full min-h-[350px] lg:min-h-[450px] bg-[url(./img/homeOffer/c2.jpg)] bg-no-repeat bg-cover m-[5px]'>
          <div className='hover:bg-black hover:bg-opacity-20 transition duration-400 flex flex-col justify-between p-[20px] h-full'>
            <div className='self-center text-[1.5em] font-semibold text-center'>{t('ОБУЧЕНИЕ')}</div>
            <div className='self-end text-[1.2em]'>{t('Детальнее')} →</div>
          </div>
        </Link>
        <Link to='/offers' className='max-w-full md:max-w-[180px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[342px] lg:w-full min-h-[350px] lg:min-h-[450px] bg-[url(./img/homeOffer/c3.jpg)] bg-no-repeat bg-cover m-[5px]'>
          <div className='hover:bg-black hover:bg-opacity-20 transition duration-400 flex flex-col justify-between p-[20px] h-full'>
            <div className='self-center text-[1.5em] font-semibold text-center'>{t('ПОЛНОЕ ПРЕДЛОЖЕНИЕ')}</div>
            <div className='self-end text-[1.2em]'>{t('Детальнее')} →</div>
          </div>
        </Link>
        <Link to='/price-list' className='max-w-full md:max-w-[180px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[342px] lg:w-full min-h-[350px] lg:min-h-[450px] bg-[url(./img/homeOffer/c4.jpg)] bg-no-repeat bg-cover m-[5px]'>
          <div className='hover:bg-black hover:bg-opacity-20 transition duration-400 flex flex-col justify-between p-[20px] h-full'>
            <div className='self-center text-[1.5em] font-semibold text-center'>{t('ТЕКУЩИЕ АКЦИИ')}</div>
            <div className='self-end text-[1.2em]'>{t('Детальнее')} →</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Offer
