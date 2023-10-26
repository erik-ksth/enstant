// import logo from './logo.svg';
import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';


function About() {
  return (
     <body>
          <Navbar/>
          About
          <RemindingFooter/>
          <AppFooter/>
     </body>
  );
}


export default About;
