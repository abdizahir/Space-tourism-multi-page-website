import { Outlet } from 'react-router';
import Header from '../../components/Header';

function Destinations() {
    return(
        <section className="h-full bg-cover bg-center bg-[url('/images/destination/background-destination-mobile.jpg')] md:bg-[url('/public/images/destination/background-destination-desktop.jpg')]">
            <Header />
            <Outlet />
        </section>
    );
}

export default Destinations;