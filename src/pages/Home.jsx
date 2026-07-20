import Hero from "../components/home/Hero";
import Overview from "../components/home/Overview";

import WhyUs from "../components/home/WhyUs";
import Innovation from "../components/home/Innovation";
import CustomerStories from "../components/home/customerstories";
import Insights from "../components/home/in";
import ContactCTA from "../components/home/ContactCTA";
import PageWrapper from "../components/layout/PageWrapper";
import MeetUsHere from "../components/home/MeetUsHere";
/**
 * Home — composes the full section sequence from the architecture
 * blueprint. Uses fullBleed on PageWrapper since Hero runs edge-to-edge
 * under the transparent navbar rather than clearing it with top padding.
 */

const Home = () => {
  return (
    <PageWrapper
      title="Home"
      description="Tec Tha — enterprise technology consulting for organizations that need systems to survive contact with reality."
      fullBleed
    >
      <Hero />
   
      <Overview />
      <Insights />
      <WhyUs />
      <MeetUsHere />
     <Innovation />
       
    <CustomerStories />
     
      <ContactCTA />
    </PageWrapper>
  );
};

export default Home;