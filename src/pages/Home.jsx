import Hero from '../components/home/Hero.jsx'
import Overview from '../components/home/Overview.jsx'
import LogoSlider from '../components/shared/LogoSlider.jsx'
import ServicesGrid from '../components/home/ServicesGrid.jsx'
import IndustriesScroll from '../components/home/IndustriesScroll.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import Statistics from '../components/home/Statistics.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import Innovation from '../components/home/Innovation.jsx'
import Testimonials from '../components/home/Testimonials.jsx'
import Insights from '../components/home/Insights.jsx'
import ContactCTA from '../components/home/ContactCTA.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container-content py-10">
        <LogoSlider />
      </div>
      <Overview />
      <ServicesGrid />
      <IndustriesScroll />
      <WhyUs />
      <Statistics />
      <FeaturedWork />
      <Innovation />
      <Testimonials />
      <Insights />
      <ContactCTA />
    </>
  )
}
