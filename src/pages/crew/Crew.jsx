import { Outlet } from 'react-router';
import Header from '../../components/Header';

function Crew() {
    return(
        <section id='crew-section' className="relative h-full bg-cover bg-center bg-[url('/images/crew/background-crew-mobile.jpg')]">
            <Header />
            <Outlet />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[100px] sm:h-0 md:h-[300px] 
                bg-gradient-to-t from-black via-black/80 to-transparent shadow-2xl z-20"></div>
        </section>
    );
}

export default Crew;