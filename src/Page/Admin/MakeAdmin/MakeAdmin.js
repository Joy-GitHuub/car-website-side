import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Alert } from '@mui/material';


import React, { useState } from 'react';

// Make Admin Section
const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);


    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }


    const handleAdminSubmit = e => {

        const user = { email };
        const url = `https://intense-cove-94957.herokuapp.com/users/admin`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
                console.log(data);
            })

        e.preventDefault();
        console.log(e);
    }



    return (
        <div>
            <h3 style={{ textAlign: 'center', margin: '50px 0px' }}>Make Admin This Web-Site</h3>
            <div style={{ marginLeft: 'auto', textAlign: 'center', marginTop: '30px' }}>

                {/* Collecting Admin Email */}
                <form onSubmit={handleAdminSubmit}>
                    <TextField sx={{ width: '50%', margin: 'auto', }}
                        type='email'
                        label="Enter Your Email"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button type='submit' variant='contained'>Submit</Button>
                </form>
                <br />
                {success && <Alert severity='success'>Make Admin  SuccessFully !!!</Alert>}

            </div>
        </div>
    );
};

export default MakeAdmin;