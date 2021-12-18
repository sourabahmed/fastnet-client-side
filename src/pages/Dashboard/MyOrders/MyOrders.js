import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [isDeleted])

    const handleDeleteOrder = id => {
        const sure = window.confirm('are you sure you want to delte this order')
        if (sure) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        alert('order deleted')
                    }
                })
            setIsDeleted(true);
        }
    }
    return (
        <div className="m-4">
            <h2>Your orders</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.filter(data => data?.email === user?.email).map(order =>
                            <tr key={order._id}>
                                <td>{order.indexOf}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.price}</td>
                                <td><button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};
export default MyOrders;