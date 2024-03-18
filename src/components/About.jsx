import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className='xs:w-[180px] w-full'>
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className='w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[200px] flex justify-evenly items-center flex-col'
                >
                    <img
                        src={icon}
                        alt={title}
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>About</p>
                <h2 className={styles.sectionHeadText}>My Skill Set</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className='mt-4 text-secondary text-[17px] w-max-3xl leading-[30px]'
            >
                I'm Shakhzod (or you can call me Shak ), a web and mobile
                developer residing in the scenic suburban area of Philadelphia,
                PA. I am currently most famliar with HTML, CSS, Bootstrap, Tailwind CSS,
                JavaScript, React and React Native. However, I am continuously
                expanding my knowledge and actively seeking opportunities to
                learn and grow each day.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-5 justify-center'>
                {technologies.map((technology, index) => (
                    <ServiceCard
                        key={technology.title}
                        index={index}
                        {...technology}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, 'about');
