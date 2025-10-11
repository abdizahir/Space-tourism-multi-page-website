import { Outlet } from 'react-router';
import Header from '../../components/Header';

function Crew() {
    return(
        <section id='crew-section' className="relative min-h-screen bg-cover bg-center bg-[url('/images/crew/background-crew-desktop.jpg')]">
            <Header />
            <Outlet />
            
        </section>
    );
}

export default Crew;