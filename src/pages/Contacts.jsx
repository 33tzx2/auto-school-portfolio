import React from 'react';
import HomeAdress from '../components/HomeAdress';
import Footer from '../components/Footer';
import ContactUsBanner from '../components/ContactUsBanner';
import SecondaryPageseSubheader from '../components/SecondaryPageseSubheader';
import Header from '../components/Header';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';



const Contacts = () => {

  return (
    <div className='flex flex-col items-center'>
      <Header isPure={false} />
      <SecondaryPageseSubheader
        title={'Контакты'}
        links={['АВТО СТОП', 'ПРЕДЛОЖЕНИЯ']}
        linksArdess={['/', '/offers']}
        lastAdres={'КОНТАКТЫ'}
      />
      <div className='w-full bg-[#faf8f8] flex justify-center py-[40px]'>
        <div className='max-w-[1270px] flex flex-col lg:flex-row w-full'>
          <ContactInfo/>
          <ContactForm/>
        </div>
      </div>
      <HomeAdress />
      <Footer />
      <ContactUsBanner />
    </div>
  );
};

export default Contacts;
