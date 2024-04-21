import React from 'react'
import { useTranslation } from 'react-i18next';
import Gallery from '../components/Galery'
import G1 from '../img/aboutUs/galery1/g1.jpg'
import G2 from '../img/aboutUs/galery1/g2.jpg'
import G3 from '../img/aboutUs/galery1/g3.jpg'
import G4 from '../img/aboutUs/galery1/g4.jpg'
import G5 from '../img/aboutUs/galery1/g5.jpg'
import G6 from '../img/aboutUs/galery1/g6.jpg'
import G7 from '../img/aboutUs/galery1/g7.jpg'
import G8 from '../img/aboutUs/galery1/g8.jpg'
import G9 from '../img/aboutUs/galery1/g9.jpg'
import G10 from '../img/aboutUs/galery1/g10.jpg'
import G11 from '../img/aboutUs/galery1/g11.jpg'
import G12 from '../img/aboutUs/galery1/g12.jpg'
import G13 from '../img/aboutUs/galery1/g13.jpg'
import G14 from '../img/aboutUs/galery1/g14.jpg'
import G15 from '../img/aboutUs/galery1/g15.jpg'
import G16 from '../img/aboutUs/galery1/g16.jpg'
import G17 from '../img/aboutUs/galery1/g17.jpg'
import G18 from '../img/aboutUs/galery1/g18.jpg'

const images = [
  { thumbnail: G1, original: G1 },
  { thumbnail: G2, original: G2 },
  { thumbnail: G3, original: G3 },
  { thumbnail: G4, original: G4 },
  { thumbnail: G5, original: G5 },
  { thumbnail: G6, original: G6 },
  { thumbnail: G7, original: G7 },
  { thumbnail: G8, original: G8 },
  { thumbnail: G9, original: G9 },
  { thumbnail: G10, original: G10 },
  { thumbnail: G11, original: G11 },
  { thumbnail: G12, original: G12 },
  { thumbnail: G13, original: G13 },
  { thumbnail: G14, original: G14 },
  { thumbnail: G15, original: G15 },
  { thumbnail: G16, original: G16 },
  { thumbnail: G17, original: G17 },
  { thumbnail: G18, original: G18 }
];

const AboutUsGalery1 = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center max-w-[1270px]'>
      <div className='text-[2.5em] text-[#0378db] mb-[20px]'>{t('Ссылки')}</div>
      <Gallery images={images} />
    </div>
  )
}

export default AboutUsGalery1