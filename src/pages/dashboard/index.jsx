import React from 'react';
import supabase from '../superbase/superbase';

const index = async () => {
    
const { data: { user } } = await supabase.auth.getUser()

return (
        <div>
           
           
        </div>
    );
};

export default index;

// const getUser = async()=>{
// const { data: { user } } = await supabase.auth.getUser()

// }

// useeffect