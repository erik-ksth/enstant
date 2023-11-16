// import logo from './logo.svg';
import "../index.css";
import 'animate.css';
import Navbar from "../components/modules/PageLayout/submodules/AppHeader/index";
import HeroSection from "../components/modules/HomePage/HeroSection";
import WhatDoYouWant from "../components/modules/HomePage/WhatDoYouWantSection";
import WhatCanWeDo from "../components/modules/HomePage/WhatCanWeDoSession";
import AreWeRight from "../components/modules/HomePage/AreWeRightSession";
import ClientsLogos from "../components/modules/HomePage/ClientsLogos";
import Testimonials from "../components/modules/HomePage/Testimonials";
import AppFooter from "../components/modules/PageLayout/submodules/AppFooter";
import RemindingFooter from "../components/modules/PageLayout/submodules/RemindingFooter";
import ScrollToTopButton from "../components/elements/ScrollToTop";

function Home() {
  return (
    <body>
      <div style={{padding: "0 2%"}}>
        <Navbar />
        <HeroSection />
        <WhatDoYouWant />
        <WhatCanWeDo />
        <AreWeRight />
        <ClientsLogos />
      </div>
      <Testimonials />
      <RemindingFooter />
      <AppFooter />
      <ScrollToTopButton />
    </body>
  );
}

export default Home;