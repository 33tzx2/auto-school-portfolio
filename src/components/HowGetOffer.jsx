import React from 'react'
import { useTranslation } from 'react-i18next';
import CheckIcon from '../img/icons/checkIcon.png';

const linkStyle = 'flex flex-row items-start justify-start text-[1.1em] lg:text-[1.35em] mb-[5px]';

const HowGetOffer = ({title, firstText, subTitle, features, secondText, secondTextBold}) => {
  const { t } = useTranslation();

  return (
    <div className='px-[10px] my-[20px] flex flex-col max-w-[1270px] w-full'>
      {title && <div className='text-[1.5em] lg:text-[2.5em] text-[#0378db] self-center mb-[20px] text-center'>{t(`${title}`)}</div>}
      {firstText && 
      <div className='flex flex-col my-[10px] text-[1.1em] lg:text-[1.35em]'>
        {firstText.map((text, index) => (
          <div key={index} className='flex justify-start w-full mb-[10px]'>
            {t(text)}
          </div>
        ))}
      </div>}
      {subTitle && <div className='text-[1.3em] lg:text-[1.75em] text-[#0378db] self-center lg:my-[20px] text-center'>{t(`${subTitle}`)}</div>}
      {features && 
      <div className='my-[10px]'>
        {features.map((feature, index) => (
          <div key={index} className={linkStyle}>
            <img src={CheckIcon} alt="link" className='w-[14px] h-[14px] mr-[5px] mt-[10px] ' />
            {t(feature)}
          </div>
        ))}
      </div>}
      {secondText && 
      <div className='flex flex-col my-[5px] lg;my-[10px] text-[1.1em] lg:text-[1.35em]'>
        {secondText.map((text, index) => (
          <div key={index} className='flex justify-start w-full mb-[10px]'>
            {t(text)}
          </div>
        ))}
      </div>}
      {secondTextBold && 
      <div className='flex flex-col my-[5px] lg;my-[10px] text-[1.1em] lg:text-[1.35em]'>
        {secondTextBold.map((text, index) => (
          <div key={index} className='flex justify-start w-full font-medium mb-[10px]'>
            {t(text)}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default HowGetOffer