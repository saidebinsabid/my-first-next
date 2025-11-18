import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-between items-center'>
                   <Link href='/'><li>Home</li></Link>
                    <Link href='/services'><li>Services</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                    <Link href='/blogs'><li>Blog</li></Link>
                    <Link href='/user'><li>User</li></Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;