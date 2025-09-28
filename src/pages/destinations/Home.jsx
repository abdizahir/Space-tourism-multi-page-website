import Header from '../../components/Header';
import exploreImg from '../../../public/images/home/Display Button States - Desktop and Tablet.png';

function Home() {
    return(
        <>    
        <section className="h-full bg-cover bg-center bg-[url('/images/home/background-home-mobile.jpg')] sm:bg-[url('/images/home/background-home-tablet.jpg')] md:bg-[url('/images/home/background-home-desktop.jpg')]">
            <Header />
                <div className='text-center m-6 md:mt-82 sm:my-32 sm:mx-10 md:flex md:items-center md:justify-between'>
                    <article id='text' className=' md:w-1/2  md:text-left md:ml-32 sm:mb-16'>
                        <p className='text-blue-300 sm:text-preset-6'>SO, YOU WANT TO TRAVEL TO</p>
                        <h2 className='text-white text-preset-3 sm:text-preset-1 mt-6 sm:my-6'>SPACE</h2>
                        <p className='text-blue-300  sm:text-xl md:text-xl leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and 
                            not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                            this world experience!</p>
                    </article>
                    <button id='explore-btn' className='relative md:w-1/2 md:flex md:items-center md:justify-center'>
                        <div id='grow' className='w-[144px] h-[144px] sm:w-[272px] sm:h-[272px]'></div>
                        <img src={exploreImg} alt="" />
                    </button>
                </div>
        </section>
        </>
    );
}

export default Home;