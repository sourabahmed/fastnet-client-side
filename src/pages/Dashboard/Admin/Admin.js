import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://shielded-ravine-12635.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Admin added")
            }
        })
    }
    return (
        <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container mt-5 ">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-5" id="form1">
                                <div className="form-data" v-if="!submitted">
                                    <div className="forms-inputs mb-4"> <span>Email</span> <input type="email" {...register("email")} />
                                        <div className="invalid-feedback">A valid email is required!</div>
                                    </div>
                                    <div className="mb-3"> <input className="login-button w-100" type="submit" value="Make Admin"/> </div>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div>
    );
};

export default Admin;