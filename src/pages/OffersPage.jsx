import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import CheckIcon from '../img/icons/checkIcon.png'

const linkStyle = 'flex flex-row items-center text-[1.25em] hover:text-[#0378db]';

const OffersPage = () => {
  const { t } = useTranslation();

 return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'ПРЕДЛОЖЕНИЯ'} links={['АВТО ШКОЛА']} linksArdess={['/']} lastAdres={'ПРЕДЛОЖЕНИЯ'}/>
      <div className='mx-[10px] my-[40px]'>
        <div className='ml-[14px]'>
          <Link to='/driving-courses' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Курсы вождения.`)}</Link>
          <div className='flex flex-col ml-[15px]'>
            <Link to="/driving-courses/cat-a" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории А.`)}</Link>
            <Link to="/driving-courses/cat-b" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение В.`)}</Link>
            <Link to="/driving-courses/cat-be" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории B+E.`)}</Link>
            <Link to="/driving-courses/cat-c" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории С.`)}</Link>
            <Link to="/driving-courses/cat-ce" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории С+Е.`)}</Link>
            <Link to="/driving-courses/cat-d" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Водительское удостоверение категории Д.`)}</Link>
            <Link to="/driving-courses/cat-inv" className={linkStyle}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Для людей с ограниченными возможностями.`)}</Link>
          </div>
          
          <Link to='/professional-qualification-certificate' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Свидетельство о профессиональной квалификации.`)}</Link>
          <div className='flex flex-col ml-[15px]'>
            <Link to='/professional-qualification-certificate/pre-qual' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Предварительная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/pre-qual-accelerated' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Ускоренная предварительная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/add-init-qual' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Дополнительная начальная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/pereodic-edu' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Периодическое обучение.`)}</Link>
          </div>
          <Link to='/adr-courses' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`курс АДР.`)}</Link>
          <Link to="/hds-courses" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`курс HDS.`)}</Link>
          <Link to="/forklift-operator-course" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Курс оператора погрузчика.`)}</Link>
          <Link to="/student-zone" className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Студенческая зона`)}</Link>
          <Link to='/price-list' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Прайс лист`)}</Link>
          <Link to='/contacts' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Контакты`)}</Link>
        </div>
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default OffersPage 