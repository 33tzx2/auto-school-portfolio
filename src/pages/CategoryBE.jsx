import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'

import DriversCoursesArticle from '../components/DriversCoursesArticle'
import HowGetOffer from '../components/HowGetOffer'
import Gallery from '../components/Galery'
import S20 from '../img/aboutUs/galery2/s20.jpg'
import S21 from '../img/aboutUs/galery2/s21.jpg'
import S22 from '../img/aboutUs/galery2/s22.jpg'
import S23 from '../img/aboutUs/galery2/s23.jpg'
import S27 from '../img/aboutUs/galery2/s27.jpg'
import S26 from '../img/aboutUs/galery2/s26.jpg'
import S30 from '../img/aboutUs/galery2/s30.jpg'

const images = [
  { thumbnail: S20, original: S20 },
  { thumbnail: S21, original: S21 },
  { thumbnail: S22, original: S22 },
  { thumbnail: S23, original: S23 },
  { thumbnail: S27, original: S27 },
  { thumbnail: S26, original: S26 },
  { thumbnail: S30, original: S30 }
];

const CategoryBE = () => {

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Водительское удостоверение категории B+E.'} links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ', 'КУРСЫ ВОЖДЕНИЯ']} linksArdess={['/', '/offers', '/driving-courses']} lastAdres={'Водительское удостоверение категории B+E.'}/>
      <DriversCoursesArticle title={'Водительское удостоверение категории B+E с прицепом'} features={['Курс категории B+E включает в себя (15 часов вождения) и стоит 1980 злотых* . (*Указанная цена действительна для стандартного курса, в нее не входят медицинские осмотры, полное предложение и акции смотрите в прайс-листе).', 'Мы предлагаем круглосуточную регистрацию на курсы получения водительских прав категории B+E.', 'Записаться можно лично в офисе центра или через онлайн-форму. Мы свяжемся с вами и расскажем о следующих шагах, необходимых для участия в курсе.']}></DriversCoursesArticle>
      <HowGetOffer
        subTitle={'Водительское удостоверение категории В дает право на управление транспортным средством, разрешенная полная масса которого не превышает 3,5 тонны, а также дает право на управление транспортными средствами с прицепом при условии:'}
        features={['Разрешенная общая масса прицепа не превышает массу транспортного средства, а общая масса автомобиля и прицепа не превышает 3,5 тонны.','Транспортное средство массой 3,5 тонны буксирует легкий прицеп, разрешенная полная масса которого не превышает 750 кг, а полная масса автомобиля с прицепом не превышает 4250 кг.']}
        secondTextBold={['Для управления транспортным средством массой не более 3,5 тонн с прицепом, отличным от указанных выше, необходимо иметь водительские права категории ВЕ (В+Е).']}
      ></HowGetOffer>

      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ B+E?'}
        firstText={['Курс вождения на категорию В+Е состоит из:']}
        features={['15 часов практических занятий (15 х 60 минут): Поездка по площади и городу с особым упором на маршруты, часто выбираемые экзаменаторами (ездишь на том же прицепе, что и на госэкзамене, со складной ногой).', 'Аттракционы начинаются и заканчиваются на нашей площадке для маневрирования,   такой же, как и во время государственного экзамена. Он расположен недалеко от экзаменационного центра WORD Odlewnicza, по адресу ул. Ягеллонская 88Г на территории ФСО (Завод легковых автомобилей в Варшаве).']}
        secondText={['Инструкторы в вашем распоряжении каждый день с 7:00 до 21:00. Если вы заняты в будние дни, вы также можете организовать поездки на выходных.']}
        secondTextBold={['После прохождения обучения вы получите все документы, необходимые для регистрации на экзамен в Областном центре дорожного движения (WORD).']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ ЭКЗАМЕН ПО ВОЖДЕНИЮ B+E?'}
        firstText={['При сдаче экзамена B+E вы не сдаете теоретическую часть . Государственный экзамен состоит только из практической части, то есть маневров на площади и езды с прицепом по городу.']}
        secondText={['Более подробную информацию о государственном экзамене в WORD (процедуру, необходимые документы, тесты и экзаменационные задания) можно найти в студенческой зоне.']}
        secondTextBold={['У вас есть дополнительные вопросы? Пишите, звоните или приходите к нам. Мы будем рады предоставить Вам всю информацию!']}
      ></HowGetOffer>
      <div className='flex flex-col items-start max-w-[1270px] w-full mb-[40px]'>
        <Gallery images={images} />
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default CategoryBE 