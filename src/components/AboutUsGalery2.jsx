import React from 'react'
import { useTranslation } from 'react-i18next';
import Gallery from './Galery'
import S1 from '../img/aboutUs/galery2/s1.jpg'
import S2 from '../img/aboutUs/galery2/s2.jpg'
import S3 from '../img/aboutUs/galery2/s3.jpg'
import S4 from '../img/aboutUs/galery2/s4.jpg'
import S5 from '../img/aboutUs/galery2/s5.jpg'
import S6 from '../img/aboutUs/galery2/s6.jpg'
import S7 from '../img/aboutUs/galery2/s7.jpg'
import S8 from '../img/aboutUs/galery2/s8.jpg'
import S9 from '../img/aboutUs/galery2/s9.jpg'
import S10 from '../img/aboutUs/galery2/s10.jpg'
import S11 from '../img/aboutUs/galery2/s11.jpg'
import S12 from '../img/aboutUs/galery2/s12.jpg'
import S13 from '../img/aboutUs/galery2/s13.jpg'
import S14 from '../img/aboutUs/galery2/s14.jpg'
import S15 from '../img/aboutUs/galery2/s15.jpg'
import S16 from '../img/aboutUs/galery2/s16.jpg'
import S17 from '../img/aboutUs/galery2/s17.jpg'
import S18 from '../img/aboutUs/galery2/s18.jpg'
import S19 from '../img/aboutUs/galery2/s19.jpg'
import S20 from '../img/aboutUs/galery2/s20.jpg'
import S21 from '../img/aboutUs/galery2/s21.jpg'
import S22 from '../img/aboutUs/galery2/s22.jpg'
import S23 from '../img/aboutUs/galery2/s23.jpg'
import S24 from '../img/aboutUs/galery2/s24.jpg'
import S25 from '../img/aboutUs/galery2/s25.jpg'
import S26 from '../img/aboutUs/galery2/s26.jpg'
import S27 from '../img/aboutUs/galery2/s27.jpg'
import S28 from '../img/aboutUs/galery2/s28.jpg'
import S30 from '../img/aboutUs/galery2/s30.jpg'
import S31 from '../img/aboutUs/galery2/s31.jpg'
import S32 from '../img/aboutUs/galery2/s32.jpg'
import S33 from '../img/aboutUs/galery2/s33.jpg'
import S34 from '../img/aboutUs/galery2/s34.jpg'
import S35 from '../img/aboutUs/galery2/s35.jpg'
import S36 from '../img/aboutUs/galery2/s36.jpg'
import S37 from '../img/aboutUs/galery2/s37.jpg'
import S38 from '../img/aboutUs/galery2/s38.jpg'
import S39 from '../img/aboutUs/galery2/s39.jpg'
import S40 from '../img/aboutUs/galery2/s40.jpg'
import S50 from '../img/aboutUs/galery2/s50.jpg'
import S51 from '../img/aboutUs/galery2/s51.jpg'
import S52 from '../img/aboutUs/galery2/s52.jpg'
import S53 from '../img/aboutUs/galery2/s53.jpg'
import S54 from '../img/aboutUs/galery2/s54.jpg'
import S55 from '../img/aboutUs/galery2/s55.jpg'
import S56 from '../img/aboutUs/galery2/s56.jpg'

const images = [
  { thumbnail: S1, original: S1 },
  { thumbnail: S2, original: S2 },
  { thumbnail: S3, original: S3 },
  { thumbnail: S4, original: S4 },
  { thumbnail: S5, original: S5 },
  { thumbnail: S6, original: S6 },
  { thumbnail: S7, original: S7 },
  { thumbnail: S8, original: S8 },
  { thumbnail: S9, original: S9 },
  { thumbnail: S10, original: S10 },
  { thumbnail: S11, original: S11},
  { thumbnail: S12, original: S12 },
  { thumbnail: S13, original: S13 },
  { thumbnail: S14, original: S14 },
  { thumbnail: S15, original: S15 },
  { thumbnail: S16, original: S16 },
  { thumbnail: S17, original: S17 },
  { thumbnail: S18, original: S18 },
  { thumbnail: S19, original: S19 },
  { thumbnail: S20, original: S20 },
  { thumbnail: S21, original: S21 },
  { thumbnail: S22, original: S22 },
  { thumbnail: S23, original: S23 },
  { thumbnail: S24, original: S24 },
  { thumbnail: S25, original: S25 },
  { thumbnail: S26, original: S26 },
  { thumbnail: S27, original: S27 },
  { thumbnail: S28, original: S28 },
  { thumbnail: S30, original: S30 },
  { thumbnail: S31, original: S31 },
  { thumbnail: S32, original: S32 },
  { thumbnail: S33, original: S33 },
  { thumbnail: S34, original: S34 },
  { thumbnail: S35, original: S35 },
  { thumbnail: S36, original: S36 },
  { thumbnail: S37, original: S37 },
  { thumbnail: S38, original: S38 },
  { thumbnail: S39, original: S39 },
  { thumbnail: S40, original: S40 },
  { thumbnail: S50, original: S50 },
  { thumbnail: S51, original: S51 },
  { thumbnail: S52, original: S52 },
  { thumbnail: S53, original: S53 },
  { thumbnail: S54, original: S54 },
  { thumbnail: S55, original: S55 },
  { thumbnail: S56, original: S56 },
];

const AboutUsGalery2 = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center max-w-[1270px]'>
        <div className='text-[2.5em] text-[#0378db] mb-[20px]'>{t('Галерея')}</div>
        <Gallery images={images} />
      </div>
  )
}

export default AboutUsGalery2