// import logo from './logo.svg';
import '../index.css';
import Container from '@mui/material/Container';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import HeroSection from '../components/modules/HomePage/HeroSection'
import WhatDoYouWant from '../components/modules/HomePage/WhatDoYouWantSection'
import WhatCanWeDo from '../components/modules/HomePage/WhatCanWeDoSession'
import AreWeRight from '../components/modules/HomePage/AreWeRightSession';
import ClientsLogos from '../components/modules/HomePage/ClientsLogos';
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';

function Home() {
  return (
     <body>
          <Navbar/>
          <HeroSection/>
          <WhatDoYouWant/>
          <WhatCanWeDo/>
          <AreWeRight/>
          <ClientsLogos/>
          <RemindingFooter/>
          <AppFooter/>
     </body>
  );
}


export default Home;
