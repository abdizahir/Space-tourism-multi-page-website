import { NavLink } from "react-router";

import DATA from "../../data/data.json";

function Capsule() {
    let curentIndex = 2;
    const da = DATA.technology[curentIndex];

    let classes = `flex items-center justify-center w-10 h-10 md:w-20 md:h-20 border-1 text-preset-7 overflow-hidden transition duration-200 ease-in-out rounded-full`;

    return(
        <section className="h-[792px] bg-cover bg-center">
            <div className="md:my-12 md:ml-[165px]">
                <article id='title' className='sm:m-10 md:m-0 flex items-center gap-8 justify-center h-[19px] mt-6 sm:justify-start'>
                    <span className='text-white opacity-60 font-bold'>0 3</span>
                    <span className='text-white'>SPACE LAUNCH 101</span>
                </article>
                <section className='text-center md:text-left'>
                    <section className="flex flex-col justify-center md:flex-row-reverse md:gap-8">
                        <article id="tech-image" className="flex items-center justify-center mt-20 sm:mt-10 md:mt-12 md:w-[608px]">
                            <img src={da.images.portrait} alt="crew-image" className="w-full h-[258px]  md:h-[600px] object-cover" />
                        </article>
                        <section id="nav-bulits&explanation" className="mt-8 md:mt-38  md:flex md:gap-16 md:w-[635px]">
                            <ul className="flex md:flex-col items-center justify-center gap-4 md:gap-8 text-white md:h-[304px] mb-10 text-preset-5">
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
                            <article id="Explanation" className="mx-6 md:mx-0 md:h-[301px] md:mt-4">
                                <span className="text-white opacity-60 text-preset-7 sm:text-2xl md:text-preset-5">THE TERMINOLOGY…</span>
                                <h4 className="text-white text-preset-10 sm:text-[40px] md:text-[45px] my-4">{da.name.toUpperCase()}</h4>
                                <p className="text-blue-300 text-preset-8 sm:text-preset-7 md:text-preset-8">{da.description}</p>
                            </article>
                        </section>
                    </section>
                </section>
            </div>  
        </section>
    );
}

export default Capsule;