import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '../img/icons/checkIcon.png';

const linkStyle = 'flex flex-row self-start justify-start text-[1.1em] lg:text-[1.35em]';

const DriversCoursesArticle = ({ title, features }) => {
  const { t } = useTranslation();

  return (
    <div className='px-[10px] py-[20px] lg:my-[20px] flex flex-col max-w-[1270px]'>
      <div className='text-[1.5em] lg:text-[2.5em] text-[#0378db] self-center mb-[10px] lg:mb-[20px] text-center'>{t(`${title}`)}</div>
      <div className='text-[1.5em] lg:text-[2.5em] text-[#0378db] self-center mb-[10px] lg:mb-[20px]'>{t(`Варшава.`)}</div>
      <div className='text-[1.1em] lg:text-[1.75em] text-[#0378db] self-center mb-[10px] lg:mb-[20px] text-center'>{t(`СКОЛЬКО СТОИТ КУРС, КОГДА ОН НАЧНЕТСЯ И КАК ЗАПИСАТЬСЯ?`)}</div>
      <div className='flex flex-col flex-wrap'>
        {features.map((feature, index) => (
          <div key={index} className={linkStyle}>
            <img src={CheckIcon} alt="link" className='w-[14px] h-[14px] mr-[5px] mt-[7px] lg:mt-[10px] ' />
            {t(feature)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DriversCoursesArticle;
