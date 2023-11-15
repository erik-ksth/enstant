// import logo from './logo.svg';
import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';
import PageTitle from '../components/modules/PageLayout/submodules/PageTitle'
import ContactForm from '../components/modules/ContactUsPage/ContactForm';
import ReferralSession from '../components/modules/ContactUsPage/ReferralSession';
import ScrollToTopButton from "../components/elements/ScrollToTop";


function ContactUs() {
  return (
     <body>
          <Navbar/>
          <PageTitle pageName="Contact Us" description="Get in touch and let us know how we can help!" />
          <ContactForm/>
          <ReferralSession/>
          <RemindingFooter/>
          <AppFooter/>
        <ScrollToTopButton />
     </body>
  );
}


export default ContactUs;
