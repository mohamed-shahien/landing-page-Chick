import { Footer } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World, Forme } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <Forme />
    <Footer />
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
