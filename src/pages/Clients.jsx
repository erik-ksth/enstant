import "../index.css";
import Navbar from "../components/modules/PageLayout/submodules/AppHeader/index";
import AppFooter from "../components/modules/PageLayout/submodules/AppFooter";
import RemindingFooter from "../components/modules/PageLayout/submodules/RemindingFooter";
import PageTitle from "../components/modules/PageLayout/submodules/PageTitle";
import { MantineProvider } from '@mantine/core';
import ClientsList from "../components/modules/ClientsPage/ClientsList";

function About() {
  return (
    <body>
      <MantineProvider>
        <Navbar />
        <PageTitle pageName="Our Clients" description="Clients Big And Small &ndash; We Help Them All!" />
        <ClientsList />
        <RemindingFooter />
        <AppFooter />
      </MantineProvider>
    </body>
  );
}

export default About;
