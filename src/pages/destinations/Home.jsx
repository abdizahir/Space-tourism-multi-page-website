import Header from '../../components/Header';
import exploreImg from '/images/home/Display Button States - Desktop and Tablet.png';

function Home() {
    return(
        <section className="min-h-screen bg-cover bg-center bg-[url('/images/home/background-home-mobile.jpg')] sm:bg-[url('/images/home/background-home-tablet.jpg')] md:bg-[url('/images/home/background-home-desktop.jpg')]">
            <Header />
                <div className='text-center p-6  sm:px-[65px] sm:py-[128px] md:px-[94px] md:pb-0 md:pt-10 md:flex md:items-center md:justify-between'>
                    <article id='text' className='md:w-1/2  md:text-left'>
                        <p className='text-blue-300  sm:text-preset-7'>SO, YOU WANT TO TRAVEL TO</p>
                        <h2 className='text-white text-preset-3 sm:text-preset-1 mt-6 sm:my-6'>SPACE</h2>
                        <p className='text-blue-300 text-[16px]  sm:text-xl leading-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and 
                            not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
                            this world experience!</p>
                    </article>
                    <button id='explore-btn' className='relative mt-6 sm:mt-20'>
                        <div id='grow' className=''></div>
                        <img src={exploreImg} alt="" className='w-[130px] sm:w-[160px] md:w-[200px]' />
                    </button>
                </div>
        </section>
    );
}

export default Home;