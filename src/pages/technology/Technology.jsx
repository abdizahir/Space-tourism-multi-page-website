import { Outlet } from 'react-router';
import Header from '../../components/Header';

function Technology() {
    return(
        <section id='tech-section' className="h-full bg-cover bg-center bg-[url('/images/technology/background-technology-mobile.jpg')]">            
            <Header />
            <Outlet />
        </section>
    );
}

export default Technology;