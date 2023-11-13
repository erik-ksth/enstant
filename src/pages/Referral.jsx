import "../index.css";
import Navbar from "../components/modules/PageLayout/submodules/AppHeader/index";
import AppFooter from "../components/modules/PageLayout/submodules/AppFooter";
import RemindingFooter from "../components/modules/PageLayout/submodules/RemindingFooter";
import PageTitle from "../components/modules/PageLayout/submodules/PageTitle";
import { MantineProvider } from '@mantine/core';
import ReferralForm from "../components/modules/ReferralPage/ReferralForm";

function Referral() {
  return (
    <body>
      <MantineProvider>
        <Navbar />
        <PageTitle pageName="Referral" description="Let your Company's Decision Makers know about us!" />
        <ReferralForm />
        <RemindingFooter />
        <AppFooter />
      </MantineProvider>
    </body>
  );
}

export default Referral;
