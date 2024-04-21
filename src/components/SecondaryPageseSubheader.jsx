import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecondaryPageseSubheader = ({ title, links, lastAdres, linksArdess }) => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center bg-[#f0f0eb] p-[20px] lg:pt-[166px] pt-[123px] w-full'>
      <div className='text-[1.35em] lg:text-[1.7em] font-semibold text-center text-black'>{t(`${title}`)}</div>
      <div className='flex flex-row flex-wrap items-center text-[#a8a8a8]'>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <Link className=' text-[0.85em] lg:text-[1em] flex flex-row' to={linksArdess[index]}>{t(link)}</Link>
            {index !== links.length - 1 && <span> &gt; </span>}
          </React.Fragment>
        ))}
        <div className='ml-[5px]'> {' >'}{t(`${lastAdres}`)}</div>
      </div>
    </div>
  )
}

export default SecondaryPageseSubheader
