import React from 'react'
import { FaTwitter, FaGithub } from 'react-icons/fa'

function Form() {
  return (
    <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <section className="w-full">
            <h2 id='hire' className='secondary-title'>Hire Me</h2>
            <p className='section-paragraph'>Feel free to contact me any time, through any</p>

            <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
                <div className="space-y-12">
                    <div>
                        <label htmlFor="" className=' text-white block mb-6 text-xl font-bold'>Name</label>
                        <input type="text" className="w-full border border-input-border bg-input px-4 py-4" />
                    </div>
                    <div>
                        <label htmlFor="" className='text-white block mb-6 text-xl font-bold'>Email</label>
                        <input type="email" className="text-white block mb-6 text-xl font-bold w-full border bg-input border-input-border" />
                    </div>
                    <div>
                        <label htmlFor="" className='text-white block mb-6 text-xl font-bold'>Message</label>
                        <textarea type='email' name="" id="" cols="30" rows="10" className="w-full border border-input-border bg-input"></textarea>
                    </div>
                    <button className='px-6 py-2 bg-theme text-white font-bold'>Send It!</button>
                </div>

                <div className="mt-12">
                    <p className="text-secondary">+234 90 3728 9192</p>
                    <a href="mailto:arziblack@gmail.com" className='text-secondary underline mt-8'>arziblack2@gmail.com</a>
                    <div className="flex mt-20 space-x-6">
                        <a href="#">
                            <FaGithub size='3rem'/>
                        </a>
                        <a href="#">
                            <FaTwitter size='3rem'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Form