import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleForm}) {
    const {register, handleSubmit, reset} = useForm();
    const handleFormSubmit = (data) => {
        handleForm(data);
        reset();
    }
    return (
        <div className='mt-5 flex justify-center'>
            <form className='flex gap-10 justify-center' onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className='px-2 py-1 rounded-md text-md outline-none font-semibold font-sans ' type="text" placeholder='name' />
                <input {...register('email')} className='px-2 py-1 rounded-md text-md outline-none font-semibold font-sans ' type="email" placeholder='email' />
                <input {...register('image')} className='px-2 py-1 rounded-md text-md outline-none font-semibold font-sans ' type="url" placeholder='image-url' />
                <input className='px-3 py-1 rounded-md bg-blue-500 text-sm text-white font-semibold cursor-pointer' type="submit" />
            </form>
        </div>
    )
}

export default Form
