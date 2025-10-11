import { NavLink } from "react-router";
import DATA from "../../data/data.json";


function Titan() {
    let curentIndex = 3;
    const da = DATA.destinations[curentIndex];
    return(
        <section className="p-6 sm:px-20 sm:py-10 md:px-[86.5px] md:py-[5.5px] overflow-hidden">
            <article id='title' className='flex items-center gap-8 justify-center sm:justify-start md:ml-10 md:text-preset-6'>
                <span className='text-white opacity-60 font-bold'>0 1</span>
                <span className='text-white'>PICK YOUR DESTINATION</span>
            </article>
            <section className='text-center md:flex md:justify-between md:items-center md:gap-1'>
                <section className="md:w-1/3">
                    <article className="flex items-center justify-center my-8 mb-8 sm:my-12">
                            <img src={da.images.png} alt="" className="rotate w-[150px] h-[150px] sm:h-[300px] sm:w-[300px]  object-contain" />
                    </article>
                </section>
                <section className="flex flex-col justify-center md:w-[445px] md:text-left">
                    <article id="destinations" className="text-blue-300 flex gap-4 justify-center md:justify-start">
                        <NavLink to="/destinations" end className="relative">
                            {({isActive}) => (
                                <>
                                    MOON
                                    {isActive && (
                                        <span className="h-1 bg-white w-[54px] absolute left-0 top-7"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/destinations/mars" className="relative">
                            {({isActive}) => (
                                <>
                                    MARS
                                    {isActive && (
                                        <span className="h-1 bg-white w-[44px] absolute left-0 top-7"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/destinations/europa" className="relative">
                            {({isActive}) => (
                                <>
                                    EUROPA
                                    {isActive && (
                                        <span className="h-1 bg-white w-[62px] absolute left-0 top-7"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink to="/destinations/titan" className="relative">
                            {({isActive}) => (
                                <>
                                    TITAN
                                    {isActive && (
                                        <span className="h-1 bg-white w-[54px] absolute -left-1 top-7"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    </article>
                    <article id="text" className="my-6">
                        <h4 className="text-white text-preset-4 sm:text-[70px]">{da.name.toUpperCase()}</h4>
                        <p className="text-blue-300 text-preset-7 leading-">{da.description}</p>
                    </article>
                    <hr className='text-white opacity-35' />
                    <article id="statics" className="mt-6 flex flex-col gap-6 sm:flex-row sm:justify-between">
                        <div>
                            <span className="text-sm text-blue-300">AVG. DISTANCE</span>
                            <p className="text-white text-preset-6">{da.distance.toUpperCase()}</p>
                        </div>
                        <div>
                            <span className="text-sm text-blue-300">EST. TRAVEL TIME</span>
                            <p className="text-white text-preset-6">{da.travel.toUpperCase()}</p>
                        </div>
                    </article>
                </section>
            </section>  
        </section>
    );
}

export default Titan;