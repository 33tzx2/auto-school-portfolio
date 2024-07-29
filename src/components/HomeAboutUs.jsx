import React from 'react'
import { useTranslation } from 'react-i18next';
import Icon1 from '../img/homeAbout/i1.png';
import Icon2 from '../img/homeAbout/i2.png';
import Icon3 from '../img/homeAbout/i3.png';

const HomeAboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center p-[15px] max-w-[1240px] mb-[40px]'>
      <div className='text-[1.75em] lg:text-[2.5em] mb-[30px] lg:mb-[40px]'>{t('НЕСКОЛЬКО СЛОВ')} <span className='text-[#0378db]'>{t('О НАС')}</span></div>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col items-center lg:mr-[15px]'>
          <div className='text-[#0378db] text-[1.7em] lg:text-[2.62em] text-center lineHeightSmall mb-[15px] lg:mb-[40px]'>{t('Центр подготовки водителей «Авто-Школа')}</div>
          <div className='text-[#414247] text-[1.15em]'><span className='text-[#0378db] underline'>{t('Мы на рынке уже 25 лет.')}</span> {t('В нашем широком предложении каждый найдет что-то для себя. Мы проводим курсы получения водительских прав всех категорий, а также курсы для людей с ограниченными возможностями и курсы обучения вождению. Наше предложение включает в себя большой выбор курсов и тренингов по вождению транспортных средств высшей категории, а также курсы операторов вилочных погрузчиков. Приглашаем Вас ознакомиться с нашим предложением.')}</div>
        </div>
        <div className='flex flex-col lg:flex-row justify-evenly lg:items-start'>
          <div className='flex flex-col items-center text-center font-semibold lineHeightMedium lg:w-[181px] mx-[5px]'>
            <img src={Icon1} alt="icon-1" className='mb-[20px] mt-[30px] lg:mt-0'/>
            <div>{t('Вы учитесь на машинах, идентичных тем, что на госэкзамене. Наши инструкторы лучшие, потому что у них многолетний опыт, обширные знания, терпение, чувство юмора и работа – их хобби.')}</div>
          </div>
          <div className='flex flex-col items-center text-center font-semibold lineHeightMedium lg:w-[181px] mx-[5px]'>
            <img src={Icon2} alt="icon-2" className='mb-[20px] mt-[30px] lg:mt-0'/>
            <div>{t('Обучение проходит в приятной и комфортной атмосфере, знания, предоставляемые нашими преподавателями, доступны и индивидуально адаптированы к потребностям каждого студента.')}</div>
          </div>
          <div className='flex flex-col items-center text-center font-semibold lineHeightMedium lg:w-[181px] mx-[5px]'>
            <img src={Icon3} alt="icon-3" className='mb-[20px] mt-[30px] lg:mt-0'/>
            <div>{t('Уже 25 лет мы лидируем в рейтинге получения водительских прав и сдачи экзамена по вождению. Более 15 000 обученных и довольных студентов.')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAboutUs