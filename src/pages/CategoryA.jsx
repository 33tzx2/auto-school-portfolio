import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader'

import DriversCoursesArticle from '../components/DriversCoursesArticle'
import HowGetOffer from '../components/HowGetOffer'
import Gallery from '../components/Galery'
import S5 from '../img/aboutUs/galery2/s5.jpg'
import S6 from '../img/aboutUs/galery2/s6.jpg'
import S7 from '../img/aboutUs/galery2/s7.jpg'

const images = [
  { thumbnail: S5, original: S5 },
  { thumbnail: S6, original: S6 },
  { thumbnail: S7, original: S7 },
];
const CategoryA = () => {

  return (
    <div className='flex flex-col items-center '>
      <Header isPure={false}/>
      <SecondaryPageseSubheader title={'Водительское удостоверение категории А.'} links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ', 'КУРСЫ ВОЖДЕНИЯ']} linksArdess={['/', '/offers', '/driving-courses']} lastAdres={'Водительское удостоверение категории А.'}/>
      <DriversCoursesArticle 
        title={'Водительское удостоверение категории А. Мотоциклы'} 
        features={['Курс категории А включает в себя (30 часов теоретических занятий и 30 часов вождения) и стоит 2500 злотых*. (*Указанная цена действительна для стандартного курса. В нее не входят медицинские осмотры, полное предложение и акции смотрите в прайс-листе).', 'Запись на курсы водительского удостоверения категорий А, А1, А2 доступна круглосуточно. Теоретические занятия мы начинаем несколько раз в месяц, также вы в любой момент можете присоединиться к текущему обучению.', 'Записаться можно лично в офисе центра или  через онлайн-форму. Мы свяжемся с вами и расскажем о следующих шагах, необходимых для участия в курсе.']}>
      </DriversCoursesArticle>
      <HowGetOffer
        title={'КАК ПОЛУЧИТЬ РАЗРЕШЕНИЯ?'}
        firstText={['Если вам 24 года или вы подумываете о получении водительских прав на мотоцикл, который даст вам возможность свободно передвигаться по дорогам и улицам благодаря своим небольшим размерам и характеристикам, категория А для вас.']}
        subTitle={'Обязательные условия:'}
        features={['Лица старше 23 лет и 9 месяцев.','Лица старше 21 года, если имеется категория А2 в течение 2 лет.', 'Лица имеющие номер РПК (профиль кандидата в водители).']}
        secondText={['Водительское удостоверение категории А дает право управлять любым мотоциклом, в том числе с коляской.']}
      ></HowGetOffer>

      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ A?'}
        subTitle={'КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ А1 СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ:'}
        features={['Первая часть содержит 30 часов теоретических занятий (30 часов х 45 минут): обсуждение правил дорожного движения, правил вождения мотоцикла, оказания первой помощи и государственного экзамена.','Вторая часть содержит 20 часов практических занятий (20 часов х 60 минут): Езда по площадке маневрирования и по городу, приобретение навыков выполнения маневров и безопасного управления мотоциклом.']}
        secondText={['При регистрации студенты получают необходимые теоретические материалы и тесты, которые помогут подготовиться к государственному экзамену. Также мы проводим необходимое медицинское обследование на месте. Уроки вождения проходят в Варшаве, с особым упором на испытательные маршруты и близость к экзаменационному центру.']}
      ></HowGetOffer>
      <HowGetOffer
        title={'Водительское удостоверение категории А1:'}
        firstText={['Если вам 16 лет и вы хотели бы управлять мотоциклами с максимальным объемом 125 см3, вам идеально подойдет категория А1. Эта категория идеально подходит для обучения вождению мотоциклов и выработки соответствующих привычек.']}
        subTitle={'ВОДИТЕЛЬСКИЕ ПРАВА КАТЕГОРИИ А1 ПОЗВОЛЯЮТ УПРАВЛЯТЬ:'}
        features={['Мотоциклы с объемом двигателя не более 125 см3, мощностью не более 11 кВт (15 л.с.) и удельной мощностью не более 0,1 кВт/кг.','Трехколесный мотоцикл мощностью до 15 кВт (20,39 л.с.).']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'СЛЕДУЮЩИЕ ЛЮДИ МОГУТ ПОДАТЬ ЗАЯВКУ НА ПОЛУЧЕНИЕ ВОДИТЕЛЬСКИХ ПРАВ А1:'}
        features={['Лица старше 15 лет и 9 месяцев.','Лица имеющие номер РПК (профиль кандидата в водители).']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ А1?'}
        subTitle={'КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ А1 СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ:'}
        features={['Первая часть содержит 20 часов теоретических занятий (20 часов х 45 минут): обсуждение правил дорожного движения, правил вождения мотоцикла, оказания первой помощи и государственного экзамена.','Вторая часть содержит 20 часов практических занятий (20 часов х 60 минут): Езда по площадке маневрирования и по городу, приобретение навыков выполнения маневров и безопасного управления мотоциклом.']}
        secondText={['При регистрации студенты получают необходимые теоретические материалы и тесты, которые помогут подготовиться к государственному экзамену. Также мы проводим необходимое медицинское обследование на месте. Уроки вождения проходят в Варшаве, с особым упором на испытательные маршруты и близость к экзаменационному центру.']}
      ></HowGetOffer>

      <HowGetOffer
        title={'Водительское удостоверение категории А2:'}
        firstText={['Если вам исполнилось  18 лет и вы не хотите больше ждать, чтобы начать кататься на мотоцикле, мы рекомендуем права категории А2 . Или, может быть, вы еще не очень уверенно себя чувствуете и хотели бы начать с машин меньшей мощности, или считаете, что ваши навыки слишком низки, чтобы управлять транспортными средствами мощностью более 35 кВт. Тогда этот курс также для вас.']}
        subTitle={'ВОДИТЕЛЬСКОЕ УДОСТОВЕРЕНИЕ КАТЕГОРИИ А2 ПОЗВОЛЯЕТ УПРАВЛЯТЬ:'}
        features={['Мотоцикл мощностью не более 35 кВт (47,58 л.с.) и удельной мощностью не более 0,2 кВт/кг.', 'Трехколесный мотоцикл мощностью до 15 кВт (20,39 л.с.).', 'Водительское удостоверение категории А2 позволяет управлять мотоциклом с коляской.']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'СЛЕДУЮЩИЕ ЛЮДИ МОГУТ ПОДАТЬ ЗАЯВКУ НА ПОЛУЧЕНИЕ ВОДИТЕЛЬСКИХ ПРАВ А2:'}
        features={['Лица старше 17 лет и 9 месяцев.', 'Лица имеющие номер РПК (профиль кандидата в водители).']}
      ></HowGetOffer>
      <HowGetOffer
        title={'КАК ВЫГЛЯДИТ КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ А2?'}
        subTitle={'КУРС ПОЛУЧЕНИЯ ВОДИТЕЛЬСКИХ ПРАВ А2 СОСТОИТ ИЗ ДВУХ ЧАСТЕЙ:'}
        features={['Первая часть содержит 30 часов теоретических занятий (30 часов х 45 минут): обсуждение правил дорожного движения, правил вождения мотоцикла, оказания первой помощи и государственного экзамена.', 'Вторая часть содержит 20 часов практических занятий (по 60 минут каждое): Езда по площадке маневрирования и по городу, приобретение навыков выполнения маневров и безопасного управления мотоциклом.']}
        secondText={['При регистрации студенты получают необходимые теоретические материалы и тесты, которые помогут подготовиться к государственному экзамену. Также мы проводим необходимое медицинское обследование на месте. Уроки вождения проходят в Варшаве, с особым упором на испытательные маршруты и близость к экзаменационному центру.']}
      ></HowGetOffer>
      <HowGetOffer
        subTitle={'ПО КАЖДОЙ ВЫБРАННОЙ ВЫШЕ КАТЕГОРИИ ИНСТРУКТОРЫ С МНОГОЛЕТНИМ ОПЫТОМ РАБОТЫ, СПЕЦИАЛИЗИРУЮЩИЕСЯ НА КОМПЛЕКСНОЙ МОТОЦИКЛЕТНОЙ ПОДГОТОВКЕ КАТЕГОРИЙ А, А1, А2, ПРЕДЛАГАЮТ СТУДЕНТАМ:'}
        features={['Многолетний опыт.', 'Доступность.', 'Надлежащее обязательство.', 'Индивидуальный подход.', 'Условия обучения без стресса.', 'Освежающие поездки.', 'И многое другое.']}
        secondTextBold={['Чтобы выбрать подходящую категорию и узнать о действующих ценах и акциях, посетите Прайс-лист. Если у вас есть какие-либо вопросы или сомнения, обращайтесь в наш офис, который будет рад ответить на все ваши вопросы и развеять ваши сомнения. Пожалуйста, свяжитесь с нами и зарегистрируйтесь.']}
      ></HowGetOffer>
      <div className='flex flex-col items-start max-w-[1270px] w-full mb-[40px]'>
        <Gallery images={images} />
      </div>
      <Footer/>
      <ContactUsBanner/>
    </div>
  )
}

export default CategoryA  