import { NavLink } from "react-router";

import DATA from "../../data/data.json";

function Launch() {
    let curentIndex = 0;
    const da = DATA.technology[curentIndex];

    let classes = `flex items-center justify-center w-10 h-10 md:w-15 md:h-15 border-1 text-preset-7 overflow-hidden transition duration-200 ease-in-out rounded-full`;

    return(
        <section className="pt-6 pb-12 sm:py-10 md:py-2 md:pl-[85px]">
                <article id='title' className='sm:m-10 md:m-0 flex items-center gap-8 justify-center h-[19px] mt-6 sm:justify-start'>
                    <span className='text-white opacity-60 font-bold'>0 3</span>
                    <span className='text-white'>SPACE LAUNCH 101</span>
                </article>
                <section className='text-center md:text-left mt-1'>
                    <section className="flex flex-col justify-between md:flex-row-reverse md:gap-8">
                        <article id="tech-image" className="flex items-center justify-center">
                            <img src={da.images.portrait} alt="crew-image" className="w-full h-[258px] sm:h-[357px] md:h-[400px] md:mt-10  object-cover" />
                        </article>
                        <section id="nav-bulits&explanation" className="mt-8 md:mt-20  md:flex md:gap-16 md:w-1/2">
                            <ul className="flex items-center justify-center mb-10 md:flex-col gap-4 md:gap-8 text-white mt-4 md:mt-0 md:mb-20 text-preset-5">
                                <li>
                                    <NavLink 
                                        to="/technology" end 
                                        className={({isActive}) => 
                                            isActive ? `${classes} bg-white text-blue-900` : classes
                                        }
                                    >
                                        1
                                        </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/technology/spaceport" 
                                        className={({isActive}) => 
                                            isActive ? `${classes} bg-white text-blue-900` : classes
                                        }
                                    >
                                        2
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/technology/capsule" 
                                        className={({isActive}) => 
                                            isActive ? `${classes} bg-white text-blue-900` : classes
                                        }
                                    >
                                        3
                                    </NavLink>
                                </li>
                            </ul>
                            <article id="Explanation" className="mx-6 sm:mx-24 md:mx-0">
                                <span className="text-white opacity-60 text-preset-7 sm:text-2xl md:text-preset-6">THE TERMINOLOGY…</span>
                                <h4 className="text-white text-preset-10 sm:text-[40px] md:text-[40px] my-4">{da.name.toUpperCase()}</h4>
                                <p className="text-blue-300 text-preset-8 sm:text-[21px] md:text-[19px]">{da.description}</p>
                            </article>
                        </section>
                    </section>
                </section>
        </section>
    );
}

export default Launch;