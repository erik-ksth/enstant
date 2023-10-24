// import logo from './logo.svg';
import '../index.css';
import Container from '@mui/material/Container';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import HeroSection from '../components/modules/HomePage/HeroSection'
import WhatDoYouWant from '../components/modules/HomePage/WhatDoYouWantSection'
import WhatCanWeDo from '../components/modules/HomePage/WhatCanWeDoSession'

function Home() {
  return (
     <body>
          <Navbar/>
          <HeroSection/>
          <WhatDoYouWant/>
          <WhatCanWeDo/>
     </body>
  );
}


export default Home;
