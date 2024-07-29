import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import HowGetOffer from '../components/HowGetOffer'


const HDSCourses = () => {

  return (
    <div className='flex flex-col items-center'>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Курс HDS'} links={['АВТО ШКОЛА', 'ПРЕДЛОЖЕНИЯ']} linksArdess={['/', '/offers']} lastAdres={'КУРС HDS'}/>
      <HowGetOffer
        title={'КУРС HDS'}
        subTitle={'HDS – ГИДРАВЛИЧЕСКИЙ АВТОКРАН'}
        secondTextBold={['Курс теоретически и практически готовит участников к работе на погрузочных кранах. Обучение завершается теоретическим и практическим экзаменом, проводимым инспектором Управления технической инспекции. После сдачи экзамена студенты получают сертификат, разрешающий им работать на «перегружателях HDS».']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'Обязательным условием перед началом курса является возраст 18 лет.'}
        secondTextBold={['Чтобы ознакомиться с полным предложением и акциями, ознакомьтесь с прайс-листом. У вас есть дополнительные вопросы? Пишите, звоните или приходите к нам. Мы будем рады предоставить Вам всю информацию!']}
      ></HowGetOffer>
      <div className='min-h-[50px]'></div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default HDSCourses 