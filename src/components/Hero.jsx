import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { github, linkedin } from '../assets';

const Hero = () => {
    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`${styles.paddingX} lg:flex-row absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5`}
            >
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#f1e343]'>Shakhzod</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} mt-2 text-white-200 font-medium`}
                    >
                        frontend web and mobile developer
                    </p>
                    <div className='mt-5 flex'>
                        <button class='bg-transparent hover:bg-yellow-500 text-white-100 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded'>
                            My Resume
                        </button>
                    </div>
                    <div className='flex mt-5 flex-row gap-5 items-center'>
                        <div
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/shak-yuldashev/',
                                    '_blank'
                                )
                            }
                            className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt={github}
                                className='w-10 h-10 object-contain hover:border-red-500'
                            />
                        </div>
                        <div
                            onClick={() =>
                                window.open(
                                    'https://github.com/shaky1996',
                                    '_blank'
                                )
                            }
                            className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={linkedin}
                                alt={linkedin}
                                className='w-10 h-10 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <ComputersCanvas />
            </div>
        </section>
    );
};

export default Hero;
