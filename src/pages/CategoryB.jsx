import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'
import { useTranslation } from 'react-i18next';

import DriversCoursesArticle from '../components/DriversCoursesArticle'
import HowGetOffer from '../components/HowGetOffer'
import Gallery from '../components/Galery'
import S1 from '../img/aboutUs/galery2/s1.jpg'
import S2 from '../img/aboutUs/galery2/s2.jpg'
import S11 from '../img/aboutUs/galery2/s11.jpg'
import S12 from '../img/aboutUs/galery2/s12.jpg'
import S13 from '../img/aboutUs/galery2/s13.jpg'
import S15 from '../img/aboutUs/galery2/s15.jpg'
import S16 from '../img/aboutUs/galery2/s16.jpg'

const images = [
  { thumbnail: S1, original: S1 },
  { thumbnail: S2, original: S2 },
  { thumbnail: S11, original: S11 },
  { thumbnail: S12, original: S12 },
  { thumbnail: S13, original: S13 },
  { thumbnail: S15, original: S15 },
  { thumbnail: S16, original: S16 }
];

const CategoryB = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Водительское удостоверение категории B.'} links={['АВТО ШКОЛА', 'ПРЕДЛОЖЕНИЯ', 'КУРСЫ ВОЖДЕНИЯ']} linksArdess={['/', '/offers', '/driving-courses']} lastAdres={'Водительское удостоверение категории B.'}/>
      <DriversCoursesArticle title={'Водительское удостоверение категории В. Легковой автомобиль.'} features={['Курс категории B включает в себя (30 часов теоретических занятий и 30 часов вождения) и стоит 3100 злотых* . (*Указанная цена действительна для стандартного курса, в нее не входят медицинские осмотры, полное предложение и акции смотрите в прайс-листе).', 'Мы предлагаем запись на курсы получения водительских прав категории В в режиме нон-стоп. Теоретические занятия мы начинаем несколько раз в месяц, также вы в любой момент можете присоединиться к текущему обучению.', 'Записаться можно лично в офисе центра или через онлайн-форму. Мы свяжемся с вами и расскажем о следующих шагах, необходимых для участия в курсе.']}></DriversCoursesArticle>
      <div className='max-w-[1270px] flex flex-row justify-start w-full text-[1.1em] lg:text-[1.35em] px-[10px]'>
        <span>
          <strong>{t('Водительское удостоверение категории В')}</strong>&nbsp;{t('дает право управлять транспортным средством массой не более 3,5 тонн.')}
          </span>
      </div>
      <HowGetOffer
        title={'КАК ПОЛУЧИТЬ РАЗРЕШЕНИЯ?'}
        firstText={['Получить водительское удостоверение категории B можно после успешной сдачи государственного экзамена, организованного Областным центром дорожного движения WORD.']}
        subTitle={'Обязательные условия:'}
        features={['Достижение возраста 18 лет и старше.','В возрасте 17 лет и 9 месяцев имеется письменное согласие родителей или опекунов.']}
        secondText={['Если вы не достигли совершеннолетия, сертификат о прохождении обучения вы получите не ранее 18-летия.','Водительские права на легковые автомобили обычно являются первой лицензией, на которую подают заявления студенты. Людям, ранее получившим водительские права категории А, волноваться не стоит. Если они не сдадут теоретическую или практическую часть государственного экзамена на категорию В, они не теряют имеющейся квалификации.']}
      ></HowGetOffer>

      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ КАТЕГОРИИ B?'}
        subTitle={'КУРС ОБУЧЕНИЯ НА ПОЛУЧЕНИЕ ВОДИТЕЛЬСКОГО УДОСТОВЕРЕНИЯ КАТЕГОРИИ В СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ:'}
        features={['Первая часть содержит 30 часов теоретических занятий ( 30 часов х 45 минут): обсуждение правил дорожного движения, правил вождения автомобиля, оказания первой помощи и государственного экзамена. Лекции проходят в лекционном зале по адресу ул. Водительская 15, каб. 411, 4 этаж (лифт).', 'Вторая часть включает 30 часов практических занятий (30 часов х 60 минут): Езда по площадке маневрирования и по городу, приобретение навыков выполнения маневров и безопасного управления легковым автомобилем. Аттракционы начинаются с места, оговоренного и обозначенного инструктором.']}
        secondText={['Уроки вождения проводятся в Варшаве и ее окрестностях, с особым упором на близость экзаменационного центра. Вождение осуществляется по экзаменационным маршрутам и на площадке маневрирования, идентичной той, которая используется при проведении государственного экзамена. Мы ездим на автомобилях Hyundai i20, таких же, как на экзамене!', 'Даты и частоту поездок вы согласовываете индивидуально с инструктором. Мы работаем всю неделю с 6:00 до 22:00, а также в субботу и воскресенье!']}
        secondTextBold={['При регистрации на курс студенты получают необходимые теоретические материалы и тесты, которые помогут подготовиться к государственному экзамену. Также мы проводим необходимое медицинское обследование на месте.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ ЭКЗАМЕН ПО ВОЖДЕНИЮ КАТЕГОРИИ B?'}
        firstText={['Государственный экзамен на получение водительских прав категории В состоит из двух этапов:']}
        features={['Теоретическая часть – тест на знание правил дорожного движения, проводимый на компьютере (оцениваемые тестовые вопросы – минимум прохождения экзамена – 68 баллов)', 'Практическая часть – маневры на площади и передвижение по городу.']}
        secondText={['Более подробную информацию о государственном экзамене в WORD (процедуру, необходимые документы, тесты и экзаменационные задания) можно найти в студенческой зоне .']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'Полное предложение курса можно найти в прайс-листе. Обязательно ознакомьтесь с действующими акциями!'}
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

export default CategoryB 