// import logo from './logo.svg';
import '../../index.css';
import Navbar from '../../components/modules/PageLayout/submodules/AppHeader/index'
import RemindingFooter from '../../components/modules/PageLayout/submodules/RemindingFooter';
import AppFooter from '../../components/modules/PageLayout/submodules/AppFooter';
import PageTitle from '../../components/modules/PageLayout/submodules/PageTitle';
import DemoSubTitle from '../../components/modules/DemoPage/DemoSubTitle';
import ScrollToTopButton from "../../components/elements/ScrollToTop";

function StartDemo() {
  return (
     <body>
          <Navbar/>
          <PageTitle pageName="Demo" description="Experience a quick interactive demo!"/>
          <DemoSubTitle/>
          <RemindingFooter/>
          <AppFooter/>
          <ScrollToTopButton />
     </body>
  );
}


export default StartDemo;
