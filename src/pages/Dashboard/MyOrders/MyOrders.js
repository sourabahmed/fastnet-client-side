import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const {user} = useAuth();

    const [orders, setOrders] = useState();
    console.log(orders);
    useEffect(() => {
        fetch("http://localhost:5000/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    } ,[])

    return (

        <div>
            <div>
                {
                    orders?.filter(data => data?.email === user?.email).map(order => 
                        <tr key={order._id}>
                        <td>{order.name}</td>
                        <td>{order.productName}</td>
                        <td>{order.price}</td>
                        <td>{order.email}</td>
                        <div><button  className="btn btn-danger">Delete</button></div>
                    </tr>
                    
                )
                }
            </div>
        </div>
        // <div className="m-sm-2 m-lg-5">
        //     <table class="table table-striped">
        //         <thead>
        //             <tr>
        //                 <th scope="col">#</th>
        //                 <th scope="col">First</th>
        //                 <th scope="col">Last</th>
        //                 <th scope="col">Handle</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <th scope="row">1</th>
        //                 <td>Mark</td>
        //                 <td>Otto</td>
        //                 <td>@mdo</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">2</th>
        //                 <td>Jacob</td>
        //                 <td>Thornton</td>
        //                 <td>@fat</td>
        //             </tr>
        //             <tr>
        //                 <th scope="row">3</th>
        //                 <td colspan="2">Larry the Bird</td>
        //                 <td>@twitter</td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default MyOrders;