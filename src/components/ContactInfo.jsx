import React from 'react'
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
    const { t } = useTranslation();

  return (
    <div className='lg:min-w-[400px] text-[1em] text-[#414247] mx-[15px]'>
      <div className='text-[#39335b] font-bold text-[2em] w-full text-center'>{t('ВОДИТЕЛЬСКИЙ ЦЕНТР')}</div>
      <div className='text-[#0378db] text-[2em] w-full text-center   font-medium'>{t('"АВТО ШКОЛА"')}</div>
      <div className='text-[#0378db] text-[2em] font-medium'>{t('Адам Инструктор')}</div>
      <div className='flex flex-col'>
        <div className='text-[#0378db] text-[1.1em] font-medium mt-[10px]'>{t('Адрес:')}</div>
          <div>
            {t('Водительская 15 комн. 410')}<br/>
            {t('(4 этаж – лифт)')}<br/>
            {t('01-402 Варшава')}
          </div>
          <div className='mt-[10px]'><span className='text-[#0378db] text-[1.1em] font-medium'>{t('Тел. мобильный: ')}</span>+48 123 456 789</div>
          <div className='mt-[10px]'><span className='text-[#0378db] text-[1.1em] font-medium'>{t('В нерабочее время: ')}</span>+48 661 321 000</div>
          <div className='text-[#0378db] text-[1.1em] font-medium mt-[10px]'>{t('Часы работы офиса:')}</div>
          <div>
            {t('понедельник 9.00 – 17.00')}<br/>
            {t('вторник 11.00 – 19.00')}<br/>
            {t('среда 11.00 – 19.00')}<br/>
            {t('четверг 9.00 – 17.00')}<br/>
            {t('пятница 9.00 – 17.00')}
          </div>
          <div className='mt-[10px]'><span className='text-[#0378db] text-[1.1em] font-medium'>{t('Электронная почта: ')}</span>exemple@auto-school.pl</div>
          <div className='mt-[10px]'><span className='text-[#0378db] text-[1.1em] font-medium'>{t('Аудитория: ')}</span>{t('ул. Эразма Водительская 15 комн. 411 (4 этаж – лифт)')}</div>
          <div className='mt-[10px]'><span className='text-[#0378db] text-[1.1em] font-medium'>{t('Маневренная площадь ')}</span>{t('ул. Ягеллонская 88Г')}</div>
        </div> 
    </div>
  )
}

export default ContactInfo