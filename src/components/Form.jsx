import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub } from 'react-icons/fa'

function Form() {
    const { log } = console;
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function sendEmail(){
        // alert(`Email sent to ${form.email} from ${form.name}`)
    }
    log(form);
    return (
        <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
            <motion.section className="w-full" initial={{opacity:0, x:200}} whileInView={{opacity:1, x:0}} transition={{duration:0.7}} viewport={{once:false}}>
                <h2 id='hire' className='secondary-title'>Hire Me</h2>
                <p className='section-paragraph'>Feel free to contact me any time, through any of the contact Links!</p>

                <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                    <div className="space-y-12">
                        <div>
                            <label htmlFor="" className=' text-white block mb-6 text-xl font-bold'>Name</label>
                            <input type="text" className="w-full border border-input-border bg-input px-4 py-4" name="name" onChange={handleChange} value={form.name} />
                        </div>
                        <div>
                            <label htmlFor="" className='text-white block mb-6 text-xl font-bold'>Email</label>
                            <input type="email" className="text-white block mb-6 text-xl font-bold w-full border bg-input border-input-border px-4 py-1" name="email" onChange={handleChange} value={form.email}/>
                        </div>
                        <div>
                            <label htmlFor="" className='text-white block mb-6 text-xl font-bold'>Message</label>
                            <textarea type='email' name="message" id="" cols="30" rows="10" className="w-full border border-input-border bg-input px-4 py-1" onChange={handleChange} value={form.message}></textarea>
                        </div>
                        <button className='px-6 py-2 bg-theme text-white font-bold' onClick={sendEmail}>Send It!</button>
                    </div>

                    <div className="mt-12">
                        <p className="text-secondary">+234 90 3728 9192</p>
                        <a href="mailto:arziblack@gmail.comsubject='Appointment with a client'&body='Hello, Please kindly schedule an appointment with us shortly, ive got work for you" className='text-secondary underline mt-8 mr-5'>arziblack2@gmail.com</a>
                        <a href="mailto:eghoiazibapu@gmail.com?subject='Appointment with a client'&body='Hello, Please kindly schedule an appointment with us shortly, ive got work for you'" className='text-secondary underline mt-8'>eghoiazibapu@gmail.com</a>
                        <div className="flex mt-20 space-x-6">
                            <a href="https://github.com/MiltonBlack">
                                <FaGithub size='3rem' />
                            </a>
                            <a href="https://twitter.com/@Miltonblack13">
                                <FaTwitter size='3rem' />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Form