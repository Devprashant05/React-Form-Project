import React from 'react'

function Card({ user, handleRemove, id }) {
    return (
        <div className='w-52 h-full bg-zinc-100 rounded-2xl flex flex-col items-center p-2 '>
            <div className='image w-[60px] h-[60px] bg-zinc-400 rounded-full overflow-hidden'>
                <img className='w-full h-full object-cover' src={user.image} alt="" />
            </div>
            <h1 className='text-center font-semibold mt-2 text-2xl'>{user.name}</h1>
            <h4 className='opacity-60 font-semibold text-xs m-1'>{user.email}</h4>
            <p className='text-center font-semibold leading-1 tracking-tight m-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque cupiditate dolor.</p>
            <button onClick={() => handleRemove(id)} className='bg-red-600 text-white px-4 py-2 rounded-2xl font-semibold text-sm m-2'>Remove It</button>
        </div>
    )
}

export default Card
