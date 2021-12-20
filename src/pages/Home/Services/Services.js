import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
       fetch("http://localhost:5000/services")
       .then(res => res.json())
       .then(data => setServices(data))
   },[])
    return (
        <div id="services">
            <div className="text-center mt-5 text-bold">
                <h4>Evernet ISP Features</h4>
                <h1>We Are Internet Service <br /> Provider Company</h1>
            </div>
            <div className="services">
                {
                    services.map(service => <Service 
                    service={service}
                    key={service._id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;