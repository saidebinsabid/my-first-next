import React from 'react';

const  ServiceDeatilsPage = async ({params}) => {
    const id = (await params).id
    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default  ServiceDeatilsPage;