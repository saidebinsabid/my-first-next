"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const ContactPage = () => {
    const router = useRouter();
    const isEmployee = true;
    const handleGo = ()=>{
        if(isEmployee){
            router.push('/contact/softvence')
        }
        else{
            router.push('/')
        }
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-yellow-400'>Contact Page</h1>
            <ul className='max-w-3xl mx-auto'>
                <li>+88014841482484</li>
                <li>Lorem, ipsum dolor.</li>
                <li>dsfhsdfgf@gmail.com</li>
            </ul>

            <button onClick={handleGo}>Softvence Details</button>
        </div>
    );
};

export default ContactPage;