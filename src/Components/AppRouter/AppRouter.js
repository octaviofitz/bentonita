//react
import {BrowserRouter, Route} from 'react-router-dom'
//components
import Header from '../Header/Header'
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer'
import PropiedadesContainer from '../PropiedadesContainer/PropiedadesContainer';
import Compra from '../Compra/Compra';
import UsosBentonita from '../UsosBentonita/UsosBentonita'

function AppRouter() {
  return (
      <BrowserRouter>

        <Header />
        <main>
        <Banner />
        <PropiedadesContainer />
        <UsosBentonita />
        <Compra />
        </main>
        <Footer />

    </BrowserRouter>
  );
}

export default AppRouter;
