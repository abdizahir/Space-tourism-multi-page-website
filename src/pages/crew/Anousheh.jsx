import { NavLink } from "react-router";

import DATA from "../../data/data.json";

function Anousheh() {
    let curentIndex = 3;
    const da = DATA.crew[curentIndex];

    let classes = `inline-block w-2.5 h-2.5 text-preset-11 overflow-hidden transition duration-200 ease-in-out bg-blue-300 opacity-30 rounded-full`;

    return(
        <section className="relative p-6 sm:px-10 sm:pt-2 sm:pb-0  md:px-24 overflow-hidden">
            <article id='title' className='flex items-center gap-4 justify-center sm:justify-start md:text-preset-6 sm:text-xl'>
                    <span className='text-white opacity-60 font-bold'>0 2</span>
                    <span className='text-white'>MEET YOUR CREW</span>
            </article>
            <section className='text-center pt-1 sm:px-16 md:text-left flex flex-col justify-center md:flex-row md:justify-between  md:items-center '>
                <article id="Explanation" className=" md:w-1/2 sm:mt-12">
                    <div className="">
                        <span className="text-white opacity-60 text-preset-7 sm:text-2xl">{da.role.toUpperCase()}</span>
                        <h4 className="text-white text-preset-10  sm:text-[40px] md:text-preset-4 mb-3">{da.name.toUpperCase()}</h4>
                        <p className="text-blue-300 text-preset-9 sm:text-preset-7">{da.bio}</p>
                    </div>
                    <ul className="relative z-20 flex items-center justify-center md:justify-start gap-4 md:gap-6 my-10">
                        <li>
                            <NavLink 
                                to="/crew" end 
                                className={({isActive}) => 
                                    isActive ? `${classes} bg-white opacity-100` : classes
                                }
                            />
                        </li>
                        <li>
                            <NavLink 
                                to="/crew/mark" 
                                className={({isActive}) => 
                                    isActive ? `${classes} bg-white opacity-100` : classes
                                }
                            />
                        </li>
                        <li>
                            <NavLink 
                                to="/crew/victor" 
                                className={({isActive}) => 
                                    isActive ? `${classes} bg-white opacity-100` : classes
                                }
                            />
                        </li>
                        <li>
                            <NavLink 
                                to="/crew/anousheh" 
                                className={({isActive}) =>
                                    isActive ? `${classes} bg-white opacity-100` : classes
                                }
                            />
                        </li>
                    </ul>
                </article>
                <article id="crew-image" className="md:w-1/2 flex items-center justify-center">
                    <img src={da.images.webp} alt="crew-image" className="w-full h-[300px] sm:h-[400px] object-contain" />
                </article>
            </section>
            <div className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[0px]  md:h-[100px] 
                bg-gradient-to-t from-black via-black/80 to-transparent shadow-2xl z-2"></div>
        </section>
    );
}

export default Anousheh;