import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

type Props = {}

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:asadimtiaz711@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.
        ${formData.message} (${formData.email})`
    };
    return (
        <div className='h-screen flex relative flex-col text-center md:flex-row md:text-left
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className="flex flex-col space-y-5 sm:space-y-10 mt-5 lg:mt-5 xl:mt-10">
                <h4 className="text-md sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold text-center">
                    I&apos;ve got just what you need.
                    <span className='decoration-[#F7AB0A]/50 underline'>Let&apos;s Talk</span>
                </h4>

                <div className='space-y-3 sm:space-y-5 md:space-y-5 lg:space-y-5 xl:space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xs sm:text-md md:text-xl lg:text-2xl'>+923009554892</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xs sm:text-md md:text-xl lg:text-2xl'>asadimtiaz711@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xs sm:text-md md:text-xl lg:text-2xl'>9, Street 15, Royal Avenue, Islamabad</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contact-input w-[50%]' type="text" />
                        <input {...register('email')} placeholder='Email' className='contact-input w-[50%]' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contact-input' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contact-input' />
                    <button
                        type='submit'
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe