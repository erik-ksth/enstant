// import logo from './logo.svg';
import '../index.css';
import Container from '@mui/material/Container';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import HeroSection from '../components/modules/HomePage/HeroSection'
import WhatDoYouWant from '../components/modules/HomePage/WhatDoYouWantSection'

function Home() {
  return (
     <body>
          <Container maxWidth="2000px">
               <Navbar/>
               <HeroSection/>
               <WhatDoYouWant/>
          </Container>
     </body>
  );
}


export default Home;
