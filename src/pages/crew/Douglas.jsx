import { NavLink } from "react-router";

import DATA from "../../data/data.json";

function Douglas() {
    let curentIndex = 0;
    const da = DATA.crew[curentIndex];

    let classes = `inline-block w-2.5 h-2.5 text-preset-11 overflow-hidden transition duration-200 ease-in-out bg-blue-300 opacity-30 rounded-full`;

    return(
        <section className="md:relative h-full mx-6 bg-cover bg-center sm:m-10 md:mt-12 md:mb-18  md:mx-24 md:h-[888px] overflow-hidden ">
            <article id='title' className='flex items-center gap-4 justify-center sm:justify-start md:text-preset-6 sm:text-xl'>
                    <span className='text-white opacity-60 font-bold'>0 2</span>
                    <span className='text-white'>MEET YOUR CREW</span>
            </article>
            <section className='text-center md:text-left flex flex-col justify-center md:flex-row md:justify-between  md:gap-12 md:items-center md:mt-40'>
                <article id="Explanation" className="mt-10 md:w-1/2">
                    <div className="">
                        <span className="text-white opacity-60 text-preset-7 sm:text-2xl">{da.role.toUpperCase()}</span>
                        <h4 className="text-white text-preset-10  sm:text-[40px] md:text-preset-4 mb-6">{da.name.toUpperCase()}</h4>
                        <p className="text-blue-300 text-preset-9 md:text-preset-7">{da.bio}</p>
                    </div>
                    <ul className="md:absolute md:bottom-19 z-[1122] flex items-center justify-center md:justify-start gap-4 md:gap-6 mt-15">
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
                <article id="crew-image" className="flex items-center justify-center mt-17 sm:mt-3 ">
                    <img src={da.images.webp} alt="crew-image" className="w-full h-[347px]  sm:h-[590px] object-contain" />
                </article>
            </section>  
        </section>
    );
}

export default Douglas;