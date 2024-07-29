import React, { useEffect, useState } from 'react'
import { changeLanguage } from '../i18n';
import { useTranslation } from 'react-i18next';
import Logo from '../img/logo.png';
import RuFlag from '../img/flags/russia-flag-icon.svg';
import PlFlag from '../img/flags/poland-flag-icon.svg';
import Tel from '../img/tel.png';
import { Link } from 'react-router-dom';
import BurgerBtn from './BurgerBtn';
import LazyLoad from 'react-lazyload';

const Header = ({isPure}) => {
  const [currentLanguage, setCurrentLanguage] = useState('ru');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('language')){
      setCurrentLanguage(localStorage.getItem('language'));
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const { t } = useTranslation();

  const handleChangeLanguage = (language) => {
    changeLanguage(language);
    setCurrentLanguage(language);
  };  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between text-white fixed w-full z-10'>
      <div className={'p-[20px] flex items-center transition-background w-full lg:w-min justify-between' + (isScrolled ? ' bg-[#00132c]' : (isPure ? ' bg-transparent' : ' bg-[#00132c]'))}>
        <Link to='/'><img src={Logo} alt="logo"  className={isScrolled ? 'lg:max-w-[125px] lg:max-h-[52px] max-w-[150px] max-h-[62px]' : 'lg:max-w-[200px] lg:max-h-[83px] max-w-[150px] max-h-[62px]'}/></Link>
        <BurgerBtn toggleMenu={toggleMenu} isOpen={isMenuOpen}></BurgerBtn>
      </div>
      <nav className={'lg:hidden w-full flex flex-col justify-center items-center transition-background text-black' + (isMenuOpen ? ' bg-[white] border border-[#00132c]' : ' hidden')}>
        <div className={'w-min py-[30px] flex items-center transition-background text-white font-medium'}>
          {currentLanguage === 'ru' && (<button onClick={() => handleChangeLanguage('pl')} className='flex flex-row items-center px-[20px] py-[5px] bg-[#0378db]  w-full justify-center rounded-md'><LazyLoad className='w-[30px] h-[15px]'><img src={RuFlag} alt='ru' className='max-w-[30px] max-h-[15px] mr-[5px]'/></LazyLoad>Русский</button>)}
          {currentLanguage === 'pl' && (<button onClick={() => handleChangeLanguage('ru')} className='flex flex-row items-center px-[20px] py-[5px] bg-[#0378db]  w-full justify-center rounded-md'><LazyLoad className='w-[30px] h-[15px]'><img src={PlFlag} alt='pl' className='max-w-[30px] max-h-[15px] mr-[5px]'/></LazyLoad>Polski</button>)}
        </div>
        <Link to='/' className='py-[10px] border-b border-t border-[#EBEBEB] w-full text-center'>{t('ГЛАВНАЯ')}</Link>
        <Link to='/about-us' className='py-[10px] border-b border-[#EBEBEB] w-full text-center'>{t('О НАС')}</Link>
        <Link to='/offers' className='py-[10px] border-b border-[#EBEBEB] w-full text-center'>{t('ПРЕДЛОЖЕНИЯ')}</Link>
        <Link to='/student-zone' className='py-[10px] border-b border-[#EBEBEB] w-full text-center'>{t('СТУДЕНЧЕСКАЯ ЗОНА')}</Link>
        <Link to='/price-list' className='py-[10px] border-b border-[#EBEBEB] w-full text-center'>{t('ПРАЙС ЛИСТ')}</Link>
        <Link to='/contacts' className='py-[10px] border-b border-[#EBEBEB] w-full text-center'>{t('КОНТАКТЫ')}</Link>
      </nav> 
      <nav className={'hidden lg:flex w-full flex-wrap justify-around items-center transition-background' + (isScrolled ? ' bg-[#00132c]' : (isPure ? ' bg-transparent' : ' bg-[#00132c]'))}>
        <Link to='/' className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px]  transition-colors duration-400 bg-transparent rounded-lg'>{t('ГЛАВНАЯ')}</Link>
        <Link to='/about-us' className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px]  transition-colors duration-400 bg-transparent rounded-lg'>{t('О НАС')}</Link>
        <Link to='/offers' className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px]  transition-colors duration-400 bg-transparent rounded-lg'>{t('ПРЕДЛОЖЕНИЯ')}</Link>
        <Link to="/student-zone" className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px]  transition-colors duration-400 bg-transparent rounded-lg'>{t('СТУДЕНЧЕСКАЯ ЗОНА')}</Link>
        <Link to='/price-list' className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px]  transition-colors duration-400 bg-transparent rounded-lg'>{t('ПРАЙС ЛИСТ')}</Link>
        <Link to='/contacts' className='m-[10px] hover:bg-[#0378db] px-[10px] py-[5px] transition-colors duration-400 bg-transparent rounded-lg'>{t('КОНТАКТЫ')}</Link>
      </nav>
      <div className={'w-min px-[20px] lg:flex items-center transition-background hidden ' + (isScrolled ? ' bg-[#00132c]' : (isPure ? ' bg-transparent' : ' bg-[#00132c]'))}>
        {currentLanguage === 'ru' && (<button onClick={() => handleChangeLanguage('pl')} className='flex flex-row items-center px-[20px] py-[5px] bg-[#0378db]  w-full justify-center rounded-md'><LazyLoad className='w-[30px] h-[15px]'><img src={RuFlag} alt='ru' className='max-w-[30px] max-h-[15px] mr-[5px]'/></LazyLoad>Русский</button>)}
        {currentLanguage === 'pl' && (<button onClick={() => handleChangeLanguage('ru')} className='flex flex-row items-center px-[20px] py-[5px] bg-[#0378db]  w-full justify-center rounded-md'><LazyLoad className='w-[30px] h-[15px]'><img src={PlFlag} alt='pl' className='max-w-[30px] max-h-[15px] mr-[5px]'/></LazyLoad>Polski</button>)}
      </div>
      <div className='bg-[#0378db] min-w-[239px] p-[20px] hidden lg:block'>
        {!isScrolled ? (<h2 className='text-center font-bold text-[1.05em]'>{t('ЗАПИШИТЕСЬ НА КУРС')}</h2>) : ''}
        <div className='flex flex-row justify-center mt-[10px]'><img src={Tel} alt="tel" className='mr-[5px] w-[18px] [18px] self-center'/>796 000 000</div>
        <div className='flex flex-row justify-center mt-[10px]'><img src={Tel} alt="tel" className='mr-[5px] w-[18px] [18px] self-center'/>501 000 000</div>
      </div>
    </div>
  )
}

export default Header;
