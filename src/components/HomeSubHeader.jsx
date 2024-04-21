import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import RightArrow from '../img/icons/arrow-right-short.svg';
import { Link } from 'react-router-dom';

const HomeSubHeader = () => {
  const { t } = useTranslation();
  const backgroundRef = useRef(null);
  const innerBackgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPositionY = `-${yOffset * 0.1}px`;
      }
      if (innerBackgroundRef.current) {
        innerBackgroundRef.current.style.backgroundPositionY = `-${yOffset * 0.25}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='lg:bg-[url(./img/header-home.jpg)] bg-no-repeat bg-cover w-full lg:pt-[133px]' ref={backgroundRef}>
      <div className='flex lg:flex-row flex-col'>
        <div className='w-full p-[20px] lg:pl-[120px] text-white flex flex-col justify-center lg:items-start items-center lg:text-start text-center bg-[url(./img/header-home.jpg)] lg:bg-none bg-right pt-[183px] bg-no-repeat' ref={innerBackgroundRef}>
          <div className='text-[1em] lg:text-[2.5em] font-bold lg:mb-[120px] mb-[60px]'>{t('Центр подготовки водителей "Авто-Стоп"')}</div>
          <div className='flex flex-col text-[1.8em] lg:text-[4.3em] lineHeightSmall justify-start'>
            {t('ЛУЧШАЯ АВТОШКОЛА')} <br />
            {t('ВАРШАВЫ C 1998 ГОДА.')}
          </div>
          <Link to='/contacts' className='bg-[#0378db] lg:px-[20px] px-[15px] lg:py-[15px] py-[10px] rounded-3xl font-semibold flex flex-row items-center lg:m-[30px] my-[150px] '>{t('СВЯЗАТЬСЯ С НАМИ')}<img src={RightArrow} alt='go'/></Link>
        </div>
        <div className='bg-[#f6f5f3] lg:max-w-[239px] p-[20px] text-center lineHeightBig w-full'>
          <p className='text-[1.2em] font-semibold mb-[10px]'>{t('КУРСЫ ВОЖДЕНИЯ')}</p>
          <p className='text-[0.75em] font-semibold '>{t('СОТРУДНИЧЕСТВО СО СЛУЖБОЙ ЗАНЯТОСТИ,')}</p>
          <p className='text-[0.75em] font-semibold '>{t('РЕКОНВЕРСИЯ ДЛЯ СОЛДАТ, ВКЛЮЧАЯ ПОДСТРАНИЦЫ')}</p>
          <div className='flex flex-col'>
            <div className='flex flex-wrap justify-between'>
              <Link to='/driving-courses/cat-a' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>A</Link>
              <Link to='/driving-courses/cat-b' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>B</Link>
              <Link to='/driving-courses/cat-be' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>B+E</Link>
              <Link to='/driving-courses/cat-c' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>C</Link>
              <Link to='/driving-courses/cat-ce' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>C+E</Link>
              <Link to='/driving-courses/cat-d' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] lg:p-[20px] p-[5px] mt-[15px] w-[49%] lg:w-[92px]'>D</Link>
            </div>
            <Link className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] p-[20px] mt-[15px] w-full'>{t('ДЛЯ ИНВАЛИДОВ')}</Link>
            <Link to='/offers' className='border-[2px] hover:bg-[#0378db] hover:text-white border-[#0378db] p-[20px] mt-[15px] w-full'>{t('ВСЕ ПРЕДЛОЖЕНИЯ')}</Link>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9772.270351805088!2d20.94484!3d52.242156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec94d5cd677cd%3A0x87874aa6477f2a59!2sAuto-Stop%20-%20prawo%20jazdy%20kat%20A%2C%20B%2C%20C%2C%20C%2BE%20D!5e0!3m2!1spl!2spl!4v1713284010368!5m2!1spl!2spl" width="100%" height="240" style={{border:0, marginTop: '15px'}} allowFullScreen="" title='sidemap' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeSubHeader;
