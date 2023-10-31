// import logo from './logo.svg';
import "../index.css";
import Navbar from "../components/modules/PageLayout/submodules/AppHeader/index";
import AppFooter from "../components/modules/PageLayout/submodules/AppFooter";
import RemindingFooter from "../components/modules/PageLayout/submodules/RemindingFooter";
import PageTitle from "../components/modules/PageLayout/submodules/PageTitle";
import Welcome from "../components/modules/AboutUsPage/Welcome";
import Services from "../components/modules/AboutUsPage/Services";
import AboutCompany from "../components/modules/AboutUsPage/AboutCompany";
import FAQs from "../components/modules/AboutUsPage/FAQs";
import { MantineProvider } from '@mantine/core';

function About() {
  return (
    <body>
      <MantineProvider>
        <Navbar />
        <PageTitle pageName="About Us" description="Get to know more about us!" />
        <Welcome />
        <Services />
        <AboutCompany />
        <FAQs />
        <RemindingFooter />
        <AppFooter />
      </MantineProvider>
    </body>
  );
}

export default About;
