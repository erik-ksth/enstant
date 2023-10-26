// import logo from './logo.svg';
import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';


function ContactUs() {
  return (
     <body>
          <Navbar/>
          Contact Us
          <RemindingFooter/>
          <AppFooter/>
     </body>
  );
}


export default ContactUs;
