import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';
import PageTitle from '../components/modules/PageLayout/submodules/PageTitle'
import Description from '../components/modules/GetStarted/Description';
import GettingInfo from '../components/modules/GetStarted/GettingInfo'

function GetStarted() {
  return (
     <body>
          <Navbar/>
          <PageTitle pageName="Get Started" description="Upgrade your workspace with our online service!" />
          <Description/>
          <GettingInfo/>
          <RemindingFooter/>
          <AppFooter/>
     </body>
  );
}


export default GetStarted;
