import React from 'react'
import Header from '../components/Header'
import HomeSubHeader from '../components/HomeSubHeader'
import Offer from '../components/Offer'
import HomeAboutUs from '../components/HomeAboutUs'
import HomeCarusel from '../components/HomeCarusel'
import HomeNews from '../components/HomeNews'
import HomeAdress from '../components/HomeAdress'
import Footer from '../components/Footer'
import ContactUsBanner from '../components/ContactUsBanner'

const Home = () => {

  return (
    <div className='flex flex-col items-center'>
      <Header isPure={true}></Header>
      <HomeSubHeader></HomeSubHeader>
      <Offer></Offer>
      <HomeAboutUs></HomeAboutUs>
      <HomeCarusel></HomeCarusel>
      <HomeNews></HomeNews>
      <HomeAdress></HomeAdress>
      <Footer></Footer>
      <ContactUsBanner></ContactUsBanner>
    </div>
  )
}

export default Home