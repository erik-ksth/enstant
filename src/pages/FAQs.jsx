import "../index.css";
import Navbar from "../components/modules/PageLayout/submodules/AppHeader/index";
import AppFooter from "../components/modules/PageLayout/submodules/AppFooter";
import RemindingFooter from "../components/modules/PageLayout/submodules/RemindingFooter";
import PageTitle from "../components/modules/PageLayout/submodules/PageTitle";
import FAQs from "../components/modules/FAQsPage/FAQs";
import { MantineProvider } from '@mantine/core';

function FAQ() {
  return (
    <body>
      <MantineProvider>
        <Navbar />
        <PageTitle pageName="FAQs" description="Find the answers here!" />
        <FAQs />
        <RemindingFooter />
        <AppFooter />
      </MantineProvider>
    </body>
  );
}

export default FAQ;
