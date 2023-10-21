// import logo from './logo.svg';
import '../index.css';
import { Container } from '@mui/material';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import HeroSection from '../components/modules/HomePage/HeroSection'

function Home() {
  return (
     <body>
          <Container>
               <Navbar/>
               <HeroSection/>
          </Container>
     </body>
  );
}


export default Home;
