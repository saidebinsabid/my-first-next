export const getUser =async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
}
import React from 'react';

const UserPage =  async () => {
    const users = await getUser()
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default UserPage;
