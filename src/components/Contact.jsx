import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_SERVICE_ID,
                import.meta.env.VITE_APP_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Shakhzod',
                    from_email: form.email,
                    to_email: 'shakyuldashev@gmail.com',
                    message: form.message
                },
                import.meta.env.VITE_APP_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert('Thank you! I will get back to you soon!');

                    setForm({
                        name: '',
                        email: '',
                        message: ''
                    });
                },
                (error) => {
                    setLoading(false);

                    console.log(error);
                    alert('Something went wrong :(\nPlease try again.');
                }
            );
    };

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className='flex-[0.75] bg-primary p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Lte's connect</p>
                <h3 className={styles.sectionHeadText}>Contact</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your Name
                        </span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='name'
                            className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your email
                        </span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='email'
                            className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Your Message
                        </span>
                        <textarea
                            rows='7'
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='message'
                            className='bg-slate-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
                        />
                    </label>
                    <button
                        type='submit'
                        className='bg-slate-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
