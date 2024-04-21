import React from 'react'
import { useTranslation } from 'react-i18next';

const HomeAdress = () => {
  const {t} = useTranslation()

  return (
    <div className='w-full flex flex-col items-center py-[30px] text-center lineHeightMedium'>
      <div className='max-w-[1170px] lg:text-[2.5em] text-[1.7em] px-[10px]'>
      {t('Наш офис находится по адресу ')}<span className='text-[#0378db]'>{t('ул. Эразма Цёлка, 13, кабинет 410, 4 этаж, лифт')}</span>
      </div>
      <div className='text-[1.2em] px-[10px] lg:text-[1.5em] max-w-[1170px] my-[10px]'>{t('Здание приспособлено для людей с ограниченными возможностями. В заднейчасти здания имеется пандус для инвалидных колясок.')}
      </div>
      <iframe title='big-map-1' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d726.3318395184648!2d20.944339238210915!3d52.24194216329782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec94d5cd677cd%3A0x87874aa6477f2a59!2sAuto-Stop%20-%20driving%20license%20B%2C%20C%2C%20C%20%2B%20E.%20D!5e0!3m2!1suk!2sua!4v1713391981798!5m2!1suk!2sua" width="100%" height="450" style={{border:'0', marginTop:'20px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='lg:text-[2.5em] text-[1.7em] px-[10px] mt-[20px] max-w-[1170px]'>{t('Площадь для вождения расположена на территории завода легковых автомобилей по адресу ')}<span className='text-[#0378db]'>{t('ул. Ягеллонская 88г.')}</span></div>
      <iframe title='big-map-2' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d513.1046116592178!2d21.010483576119718!3d52.28422926186861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ec955afe695b3%3A0x76dce668fd47202b!2zSmFnaWVsbG_FhHNrYSA4OEcsIDAzLTIxNSBXYXJzemF3YSwg0J_QvtC70YzRidCw!5e0!3m2!1suk!2sua!4v1713392071608!5m2!1suk!2sua" width="100%" height="450" style={{border:'0', marginTop:'20px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default HomeAdress