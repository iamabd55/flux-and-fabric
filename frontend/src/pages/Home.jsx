import React from 'react'
import Header from '../components/Home/header'
import Hero from '../components/Home/Hero'
import FeaturedCategories from '../components/Home/FeaturedCategories'
import NewArrivals from '../components/Home/NewArrivals'
import Footer from '../components/Home/Footer'

const Home = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display min-h-screen flex flex-col">
      <Header />
      
      <main className="grow w-full flex flex-col">
        <Hero />
        
        <div className="w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-24 flex flex-col gap-24 lg:gap-32">
          <FeaturedCategories />
          <NewArrivals />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Home
