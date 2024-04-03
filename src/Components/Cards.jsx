import React from 'react'
import Card from './Card'

function Cards({ users, handleRemove }) {
    return (
        <div className='w-full max-h-96 p-5 rounded-lg flex justify-center gap-4 items-center overflow-auto flex-wrap'>
            {users.map((item, index) => {
                return <Card key={index} handleRemove={handleRemove} id={index} user={item}/>
            })}

        </div>
    )
}

export default Cards
