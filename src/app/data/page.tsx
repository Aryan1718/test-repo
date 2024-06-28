'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Datapage() {

    const [username,setUsername] = useState('')

    const handleBtn = async () =>{
        try {

            const response = await fetch('/api/users/userdata',)
            const data = await response.json()
            console.log(data.data[0].username);
            setUsername(data.data[0].username)
            
            
            
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

  return (
    <div className='flex flex-col items-center justify-center text-4xl mt-10'>
        
        Data Will be Displayed Here

        <h1>{username}</h1>
        <button
        className='mt-20'
        onClick={handleBtn}
        >
            Data
        </button>
    </div>
  )
}

