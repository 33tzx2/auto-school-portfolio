import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'

import HowGetOffer from '../components/HowGetOffer'


const AcceleratedPreQual = () => {

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Ускоренная предварительная квалификация.'} links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ', 'СЕРТИФИКАТ ПРОФЕССИОНАЛЬНОЙ КВАЛИФИКАЦИИ']} linksArdess={['/', '/offers', '/professional-qualification-certificate']} lastAdres={'Ускоренная предварительная квалификация.'}/>
      <HowGetOffer
        title={'Ускоренная предварительная квалификация.'}
        firstText={['Применяется к водителям с водительскими правами категории C/CE или D/DE.', 'Водители обязаны пройти начальную квалификацию или ускоренный курс начальной квалификации, если они хотят профессионально перевозить людей или грузы автомобильным транспортом:']}
        features={['Водительские права категории D/D1 они получили после 10 сентября 2008 года.', 'Водительские права категории C/C1 они получили после 10 сентября 2009 года.']}
        secondTextBold={['Водители, имеющие права, выданные ранее вышеуказанных дат, обязаны проходить  периодическое обучение.']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'Ускоренный курс начальной квалификации предназначен для желающих работать водителем:'}
        features={['В рамках категории C/CE и старше 21 года.', 'В категории D/DE и старше 23 лет.']}
        secondTextBold={['Молодые водители проходят очный курс начальной квалификации.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'УСКОРЕННАЯ НАЧАЛЬНАЯ КВАЛИФИКАЦИЯ СОСТОИТ ИЗ 140 ЧАСОВ ЗАНЯТИЙ. ЗАНЯТИЯ ВКЛЮЧАЮТ ПРОФЕССИОНАЛЬНОЕ ОБРАЗОВАНИЕ ПО:'}
        firstText={[' 1. Рациональное вождение с учетом правил безопасности, в том числе:']}
        features={['Знание технических характеристик и принципов работы компонентов безопасности автомобиля.', 'Возможность оптимизировать расход топлива.', 'Возможность обеспечить сохранность перевозимого груза.', 'Умение обеспечить безопасность пассажиров.', 'Умение правильно крепить груз.']}
        secondText={['', '2. Способность применять правила, касающиеся автомобильного транспорта.', '3. Опасности, связанные с профессией, в том числе безопасность дорожного движения и экологическая безопасность.', '4. Сервис и логистика, включая формирование имиджа компании и знание рынка автомобильных перевозок и его организации.', '', 'Курс начальной квалификации завершается экзаменом перед комиссией, назначенной воеводой, после чего выдается свидетельство о профессиональной квалификации.', 'Стоимость государственного экзамена включена в стоимость курса. Срок ожидания государственного экзамена составляет 2-3 недели.','','Помимо формата лекций, мы также организуем курсы с использованием специализированного компьютерного программного обеспечения. Для занятых людей мы организуем ускоренный курс начальной квалификации в форме электронного обучения в компьютерном классе, расположенном в учебном центре.']}
        secondTextBold={['Внимание!', 'Перед выдачей аттестата о профессиональной квалификации студенты обязаны пройти медико-психологическое обследование.', 'Вы не сможете практиковать водительское право до тех пор, пока не получите соответствующую запись в документе, подтверждающем ваше водительское удостоверение. Водительские права выдаются транспортным отделом по месту вашего проживания.', ' ', 'Чтобы ознакомиться с полным предложением и акциями, ознакомьтесь с прайс-листом. У вас есть дополнительные вопросы? Пишите, звоните или приходите к нам. Мы будем рады предоставить Вам всю информацию!']}
      ></HowGetOffer>
      
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default AcceleratedPreQual 