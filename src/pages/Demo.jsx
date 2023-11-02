// import logo from './logo.svg';
import '../index.css';
import Navbar from '../components/modules/PageLayout/submodules/AppHeader/index'
import RemindingFooter from '../components/modules/PageLayout/submodules/RemindingFooter';
import AppFooter from '../components/modules/PageLayout/submodules/AppFooter';
import PageTitle from '../components/modules/PageLayout/submodules/PageTitle';
import WelcomeDemo from '../components/modules/DemoPage/Welcome';

function Demo() {
  return (
     <body>
          <Navbar/>
          <PageTitle pageName="Demo" description="Experience a quick interactive demo!"/>
          <WelcomeDemo/>
          <RemindingFooter/>
          <AppFooter/>
     </body>
  );
}


export default Demo;