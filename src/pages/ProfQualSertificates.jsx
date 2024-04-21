import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import CheckIcon from '../img/icons/checkIcon.png'

const linkStyle = 'flex flex-row items-center text-[1.25em] hover:text-[#0378db]';

const ProfQualSertificates = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Свидетельство о профессиональной квалификации.'} links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ']} linksArdess={['/', '/offers']} lastAdres={'Свидетельство о профессиональной квалификации.'}/>
      <div className='mx-[10px] my-[40px] min-h-[40vh]'>
        <div className='ml-[14px]'>
            <Link to='/professional-qualification-certificate/pre-qual' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Предварительная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/pre-qual-accelerated' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Ускоренная предварительная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/add-init-qual' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Дополнительная начальная квалификация.`)}</Link>
            <Link to='/professional-qualification-certificate/pereodic-edu' className={linkStyle + ' font-medium'}><img src={CheckIcon} alt="link"  className='w-[14px] h-[14px] mr-[5px] '/>{t(`Периодическое обучение.`)}</Link>
        </div>
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default ProfQualSertificates 