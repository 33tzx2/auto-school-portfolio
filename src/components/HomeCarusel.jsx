import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/zoom';
import { Navigation } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Pavel from '../img/swiper/pavel.jpg'
import Bislan from '../img/swiper/Bislan.jpg'
import Chibis from '../img/swiper/Chibis.jpg'
import Marek from '../img/swiper/Marek.jpg'
import Veronika from '../img/swiper/Veronika.jpg'

import { useTranslation } from 'react-i18next';


const HomeCarousel = () => {
  const {t} = useTranslation()

  return (
    <div className='p-[20px] bg-[url(./img/swiper/bg.jpg)] bg-cover bg-right-top bg-no-repeat w-full'>
      <div className='font-[700] text-[25px] lg:text-[37px] mb-[21px] pl-[20px] text-white text-center'>{t('РЕКОМЕНДАЦИИ КЛИЕНТОВ')}</div>
      <Swiper slidesPerView='auto' navigation={true} grabCursor={false} modules={[Navigation]} className="mySwiper" loop={true} >
        <SwiperSlide className=' max-w-[375px] min-h-[440px] px-[10px]'>
          <div className='flex flex-col  items-center text-start py-[28px] px-[19px] border bg-white border-grey-300 rounded-[15px] shadow-md max-w-[375px]'>
          <img src={Veronika} alt="avatar" className='rounded-full w-[156px] h-[156px]'/>
          <div className='my-[10px] font-medium text-[1.25em]'>{t('Вероника')}</div>
          <div className='pt-[15px] border-grey-500 border-t'>{t('" Рекомендую эту автошколу. Сдала с первого раза без особых проблем. Очень благодарна господину Адаму, который очень удобно подбирает часы вождения, благодаря чему мне стало намного легче сдать экзамены по вождению максимально быстро и качественно. максимально удобно, я также хотел бы поблагодарить инструктора Рышарда, который предоставил мне свои знания правильно и надежно.')}</div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' max-w-[375px] min-h-[440px] px-[10px]'>
          <div className='flex flex-col  items-center text-start py-[28px] px-[19px] border bg-white border-grey-300 rounded-[15px] shadow-md max-w-[375px]'>
          <img src={Marek} alt="avatar" className='rounded-full w-[156px] h-[156px]'/>
          <div className='my-[10px] font-medium text-[1.25em]'>{t('Марек')}</div>
          <div className='pt-[15px] border-grey-500 border-t'>{t('" Auto-Stop - школа, которую стоит рекомендовать. Самым большим преимуществом является высокий уровень компетентности преподавателей. Практические занятия проводятся с большой отдачей, что выражается в эффективности сдачи экзаменов. Сдавала экзамены на категории С и С+. E в первый раз. Помимо этой школы, я был очень любезен при организации дат поездки, благодаря чему мне удалось пройти курсы в разумные сроки, хотя у меня было довольно ограниченное время».')}</div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' max-w-[375px] min-h-[440px] px-[10px]'>
          <div className='flex flex-col  items-center text-start py-[28px] px-[19px] border bg-white border-grey-300 rounded-[15px] shadow-md max-w-[375px]'>
          <img src={Bislan} alt="avatar" className='rounded-full w-[156px] h-[156px]'/>
          <div className='my-[10px] font-medium text-[1.25em]'>{t('Бислан')}</div>
          <div className='pt-[15px] border-grey-500 border-t'>{t('"Лучшая автошкола, которую я когда-либо видел. Сдал экзамен на категорию В. Господин Роберт хорошо объясняет и показывает, как правильно и безопасно ездить по городу. Он указывает на ваши недостатки, что вы делаете не так, и помогает вам совершенствоваться. В этой школе вы сдадите экзамен, рекомендую)"')}</div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' max-w-[375px] min-h-[440px] px-[10px]'>
          <div className='flex flex-col  items-center text-start py-[28px] px-[19px] border bg-white border-grey-300 rounded-[15px] shadow-md max-w-[375px]'>
          <img src={Pavel} alt="avatar" className='rounded-full w-[156px] h-[156px]'/>
          <div className='my-[10px] font-medium text-[1.25em]'>{t('Павел')}</div>
          <div className='pt-[15px] border-grey-500 border-t'>{t('"Очень рекомендую автошколу "Авто-Школа". Экзамен на категорию В сдал с первого раза. Госпожа Александра Дембовская - замечательный инструктор, которого рекомендую от всей души. Вождение прошло в очень приятной атмосфере. Госпожа Ола великолепно передаете знания, еще раз большое спасибо, госпожа Александра, за то, что так хорошо подготовили меня к экзамену.»')}</div>
        </div>
        </SwiperSlide>
        <SwiperSlide className=' max-w-[375px] min-h-[440px] px-[10px]'>
          <div className='flex flex-col  items-center text-start py-[28px] px-[19px] border bg-white border-grey-300 rounded-[15px] shadow-md max-w-[375px]'>
          <img src={Chibis} alt="avatar" className='rounded-full w-[156px] h-[156px]'/>
          <div className='my-[10px] font-medium text-[1.25em]'>{t('Чибис')}</div>
          <div className='pt-[15px] border-grey-500 border-t'>{t('" Курс B+E, вождение проходило в очень приятной атмосфере, без стресса. Инструкторы все хорошо объяснили, часы были подогнаны под мои возможности, машина и прицеп были в очень хорошем состоянии - как и на экзамене. Итог - экзамен сдан с первого раза!!!!Спасибо за уделенное время!!!Буду рекомендовать другим!!!')}</div>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default HomeCarousel 
