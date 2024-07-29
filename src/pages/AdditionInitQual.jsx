import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'

import HowGetOffer from '../components/HowGetOffer'


const AdditionInitQual = () => {

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Дополнительная начальная квалификация.'} links={['АВТО ШКОЛА', 'ПРЕДЛОЖЕНИЯ', 'СЕРТИФИКАТ ПРОФЕССИОНАЛЬНОЙ КВАЛИФИКАЦИИ']} linksArdess={['/', '/offers', '/professional-qualification-certificate']} lastAdres={'Дополнительная начальная квалификация.'}/>
      <HowGetOffer
        title={'Дополнительная начальная квалификация.'}
        subTitle={'Дополнительная начальная квалификация предназначена для водителей, уже получивших сертификат начальной квалификации водителя по следующему блоку программы:'}
        features={['C1, C1+E, C и C+E  или', 'Д1, Д1+Е, Д и Д+Е']}
        secondText={['Намерены профессионально перевозить транспортные средства другой категории, чем та, на которую у них уже имеется квалификационный аттестат.', 'В зависимости от возраста и даты выдачи водительского удостоверения водитель обязан пройти курс дополнительной квалификации (дневной формы) или ускоренный курс повышения квалификации.']}
        secondTextBold={['Чтобы ознакомиться с полным предложением и акциями, ознакомьтесь с прайс-листом. У вас есть дополнительные вопросы? Пишите, звоните или приходите к нам. Мы будем рады предоставить Вам всю информацию!']}
      ></HowGetOffer>
    
      
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default AdditionInitQual 