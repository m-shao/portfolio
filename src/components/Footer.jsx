import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react'

const Footer = ({ isContactPage }) => {
	// const [message, setMessage] = useState('');
	// const [email, setEmail] = useState('');
    // const [ disabled, setDisabled] = useState(false);
    // const [ label, setLabel ] = useState('Send Message');

    const [state, handleSubmit] = useForm("mqkvyyjo");
	
    return (
        <section className='sticky flex items-center justify-center w-screen min-h-screen h-auto py-24 bg-port-dark font-[montserrat] flex-col gap-12 text-port-light'>
            <div className='w-2/3 font-[BuiltTitling] text-7xl md:text-8xl'>
                <h1>This is my 
                    <span className="bg-gradient-to-r from-red-500 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
                        &nbsp;SICK&nbsp;
                    </span>
                    <span>
                        {isContactPage ? ("Contact Page") : ("Footer")}
                    </span>
                    &trade;
                 </h1>
            </div>
            
            <form onSubmit={handleSubmit} method="POST" className='flex flex-col w-2/3 gap-12'>
                <div className='flex flex-col items-center justify-center w-full gap-12 md:flex-row md:items-start'>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" 
                            placeholder='Enter your name' 
                            className='w-full px-1 py-2 text-lg border-b md:text-xl bg-port-dark' />
                    </div>
                    <div className='flex flex-col w-full md:w-1/2'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"
                            placeholder='Enter your email address' 
                            className='w-full px-1 py-2 text-lg border-b md:text-xl bg-port-dark'
                         />
                        <ValidationError 
                            className='text-red-500'
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" 
                        placeholder='Your message to me because you thought my website was so cool...' 
                        className='w-full px-1 py-2 text-lg border-b resize-none md:text-xl bg-port-dark' 
                    />
                    <ValidationError 
                        className='text-red-500'
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div>
                    <button type="submit" disabled={state.submitting || state.succeeded} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden text-lg font-medium transition duration-300 ease-out border-2 shadow-md border-port-light group">
                    { state.succeeded ? 
                    (
                        <>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full text-port-dark bg-port-light group-hover:translate-x-0 ease">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform text-port-light group-hover:translate-x-full ease">Message Sent!</span>
                            <span className="relative invisible">Send me a message!</span>
                        </>
                    )
                    : (
                        <>
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full text-port-dark bg-port-light group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform text-port-light group-hover:translate-x-full ease">Send me a message!</span>
                            <span className="relative invisible">Send me a message!</span>
                        </>
                    )
                    }
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Footer