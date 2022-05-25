import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin,setAdmin] = useState(false);
    const [addLoading, setAddLoading] = useState(true);
    useEffect(()=>{
        const email = user?.user?.email
        fetch(`http://localhost:5000/admin/${email}`,{
            method:'GET',
            headers: { 
                'Content-Type':'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin);
            setAddLoading(false);
        })
    },[])
    return [admin,addLoading]
};

export default useAdmin;