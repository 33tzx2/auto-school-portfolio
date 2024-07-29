import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import CheckIcon from '../img/icons/checkIcon.png'

const linkStyle = 'flex flex-row items-center text-[1.25em] hover:text-[#0378db]';

const DrivingCourses = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Курсы вождения.'} links={['АВТО ШКОЛА', 'ПРЕДЛОЖЕНИЯ']} linksArdess={['/', '/offers']} lastAdres={'ПРЕДЛОЖЕНИЯ'}/>
      <div className='mx-[10px] my-[40px]'>
        <div className='ml-[14px]'>
          <Link to="/driving-courses/cat-a" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории А.`)}</Link>
          <Link to="/driving-courses/cat-b" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение В.`)}</Link>
          <Link to="/driving-courses/cat-be" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории B+E.`)}</Link>
          <Link to="/driving-courses/cat-c" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории С.`)}</Link>
          <Link to="/driving-courses/cat-ce" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории С+Е.`)}</Link>
          <Link to="/driving-courses/cat-d" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории Д.`)}</Link>
          <Link to="/driving-courses/cat-inv" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Для людей с ограниченными возможностями.`)}</Link>
        </div>
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default DrivingCourses 