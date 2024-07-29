import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import AboutUs1 from '../img/aboutUs/aboutUs1.jpg'
import { useTranslation } from 'react-i18next';
import AboutUsGalery2 from '../components/AboutUsGalery2'

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'О НАС'} links={['АВТО ШКОЛА']} linksArdess={['/']} lastAdres={'О НАС'}/>
      <div className='max-w-[1270px] lineHeightMedium flex flex-col py-[30px] px-[10px]'>
        <div className='text-[2.5em] text-[#0378db] self-center mb-[20px]'>{t('Что нас отличает?')}</div>
        <div className='text-[1.2em] font-medium mb-[20px]'>{t('Автошкола «Авто-Школа» была создана в начале 1998 года. За это время мы успешно помогли нашим студентам получить более 5000 водительских прав. Это благодаря нашим транспортным средствам – идентичным тем, которые используются на госэкзамене, и квалифицированным инструкторам – мы способны привить умение водить автомобиль каждому в крови. У нас вы получите все необходимое для управления автотранспортом в соответствии с требованиями польского законодательства.')}</div>
        <img src={AboutUs1} alt="main-img" className=' maxw-[360px] lg:max-w-[500px] lg:max-h-[302px]' />
      </div>
      <AboutUsGalery2/>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default AboutUs