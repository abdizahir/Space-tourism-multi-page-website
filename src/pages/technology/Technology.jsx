import { Outlet } from 'react-router';
import Header from '../../components/Header';

function Technology() {
    return(
        <section id='tech-section' className="min-h-screen bg-cover bg-center bg-[url('/images/technology/background-technology-desktop.jpg')]">            
            <Header />
            <Outlet />
        </section>
    );
}

export default Technology;