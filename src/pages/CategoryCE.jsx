import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import { useTranslation } from 'react-i18next';

import DriversCoursesArticle from '../components/DriversCoursesArticle'
import HowGetOffer from '../components/HowGetOffer'
import Gallery from '../components/Galery'
import S33 from '../img/aboutUs/galery2/s33.jpg'
import S34 from '../img/aboutUs/galery2/s34.jpg'
import S31 from '../img/aboutUs/galery2/s31.jpg'
import S32 from '../img/aboutUs/galery2/s32.jpg'
import S36 from '../img/aboutUs/galery2/s36.jpg'
import S37 from '../img/aboutUs/galery2/s37.jpg'
import S38 from '../img/aboutUs/galery2/s38.jpg'
import S51 from '../img/aboutUs/galery2/s51.jpg'
import S50 from '../img/aboutUs/galery2/s50.jpg'
import S53 from '../img/aboutUs/galery2/s53.jpg'
import S55 from '../img/aboutUs/galery2/s55.jpg'
import S56 from '../img/aboutUs/galery2/s56.jpg'

const images = [
  { thumbnail: S33, original: S33 },
  { thumbnail: S34, original: S34 },
  { thumbnail: S31, original: S31 },
  { thumbnail: S32, original: S32 },
  { thumbnail: S36, original: S36 },
  { thumbnail: S37, original: S37 },
  { thumbnail: S38, original: S38 },
  { thumbnail: S51, original: S51 },
  { thumbnail: S53, original: S53 },
  { thumbnail: S55, original: S55 },
  { thumbnail: S56, original: S56 },
  { thumbnail: S50, original: S50 }
];

const CategoryCE = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Водительское удостоверение категории С+Е'} links={['АВТО ШКОЛА', 'ПРЕДЛОЖЕНИЯ', 'КУРСЫ ВОЖДЕНИЯ']} linksArdess={['/', '/offers', '/driving-courses']} lastAdres={'Водительское удостоверение категории С+Е'}/>
      <DriversCoursesArticle title={'Водительское удостоверение категории C+E. Грузовик с прицепом.'} features={['Курс категории C+E включает в себя (25 часов вождения) и стоит 3880 злотых* . (*Указанная цена действительна для стандартного курса, не включает медицинские и психотехнические обследования, полное предложение и акции смотрите в прайс-листе).', 'Мы предлагаем круглосуточную регистрацию на курсы получения водительских прав категории С+Е.', 'Записаться можно лично в офисе центра или через онлайн-форму. Мы свяжемся с вами и расскажем о следующих шагах, необходимых для участия в курсе.']}></DriversCoursesArticle>
      <div className='max-w-[1270px] flex justify-start w-full text-[1.1em] lg:text-[1.35em] px-[10px]'>{t('ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ КАТЕГОРИИ С ДАЕТ ПРАВО УПРАВЛЯТЬ ТРАНСПОРТНЫМ СРЕДСТВОМ МАССОЙ БОЛЕЕ 3,5 ТОНН БЕЗ ПРИЦЕПА.')}<br/>{t('Для управления грузовиком с прицепом необходимо иметь водительские права CE (C+E).')}</div>
      <HowGetOffer
        title={'КАК ПОЛУЧИТЬ ВОДИТЕЛЬСКИЕ ПРАВА CE?'}
        firstText={['Необходимо пройти курсы вождения на эту категорию и успешно сдать государственный экзамен (только практическую часть), организованный Областным центром дорожного движения ВОРД.']}
        subTitle={'Человек может записаться на курсы получения водительских прав категории СE, если:'}
        features={['У него уже есть водительские права категории С.', 'Он сдал экзамен на водительские права категории C.']}
        secondTextBold={['ВНИМАНИЕ! ЕСЛИ ВЫ НЕ СДАДИТЕ ГОСУДАРСТВЕННЫЙ ЭКЗАМЕН НА КАТЕГОРИЮ CE, ВЫ НЕ ПОТЕРЯЕТЕ ИМЕЮЩУЮСЯ КВАЛИФИКАЦИЮ.']}
      ></HowGetOffer>

      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС?'}
        firstText={['Курс вождения на категорию С+Е состоит из:']}
        features={['25 часов практических занятий (25 часов х 60 минут): Езда по площадке маневрирования и по городу, приобретение навыков выполнения маневров и безопасного управления грузовым автомобилем.', 'Аттракционы начинаются и заканчиваются на нашей площадке для маневрирования,   такой же, как и во время государственного экзамена. Он расположен недалеко от экзаменационного центра WORD Odlewnicza, по адресу ул. Ягеллонская 88Г на территории ФСО (Завод легковых автомобилей в Варшаве).']}
        secondText={['Уроки вождения проводятся с особым упором на окрестности экзаменационного центра. Вождение осуществляется по экзаменационным маршрутам и на площадке маневрирования, идентичной той, которая используется при проведении государственного экзамена. Мы ездим на диагностических машинах.']}
        secondTextBold={['После прохождения обучения вы получите все документы, необходимые для регистрации на экзамен в Областном центре дорожного движения (WORD).', 'Мы проводим необходимые медицинские и психотехнические обследования на месте (Обследования не включены в стоимость курса. Стоимость исследований: Медицинское 200 злотых, Психотехническое 150 злотых).', 'ВНИМАНИЕ! ДАТЫ ПОЕЗДКИ ВЫ СОГЛАСОВЫВАЕТЕ ИНДИВИДУАЛЬНО В УДОБНОЕ ДЛЯ ВАС ВРЕМЯ. МЫ РАБОТАЕМ ВСЮ НЕДЕЛЮ С 7:00 ДО 21:00, А ТАКЖЕ В СУББОТУ И ВОСКРЕСЕНЬЕ!']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ ЭКЗАМЕН ПО ВОЖДЕНИЮ C+E ?'}
        subTitle={'ГОСУДАРСТВЕННЫЙ ЭКЗАМЕН НА ПОЛУЧЕНИЕ ВОДИТЕЛЬСКИХ ПРАВ СЕ СОСТОИТ ТОЛЬКО ИЗ ПРАКТИЧЕСКОЙ ЧАСТИ. МАНЕВРЫ СОВЕРШАЮТСЯ НА ПЛОЩАДИ И РАЗЪЕЗЖАЮТСЯ ПО ГОРОДУ.'}
        secondTextBold={['Более подробную информацию о государственном экзамене в WORD (процедуру, необходимые документы, тесты и экзаменационные задания) можно найти в студенческой зоне.', 'У ВАС ЕСТЬ ДОПОЛНИТЕЛЬНЫЕ ВОПРОСЫ? ПИШИТЕ, ЗВОНИТЕ ИЛИ ПРИХОДИТЕ К НАМ. МЫ БУДЕМ РАДЫ ПРЕДОСТАВИТЬ ВАМ ВСЮ ИНФОРМАЦИЮ!']}
      ></HowGetOffer>
      <div className='flex flex-col items-start max-w-[1270px] w-full mb-[40px]'>
        <Gallery images={images} />
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default CategoryCE