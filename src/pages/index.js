// import logo from './logo.svg';
import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import { Container } from '@mui/material';

function Home() {
  return (
     <body>
          <Container maxWidth="1200px">
               <Navbar/>
          </Container>
     </body>
  );
}

export default Home;
