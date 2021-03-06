import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-3xl font-bold text-center mt-4 text-orange-400'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/review">Add Review</Link></li>
                    <li><Link to="/dashboard/my-Order">My Order</Link></li>
                    {
                        admin && <>
                        <li><Link to="/dashboard/admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/allorder">All Order</Link></li>
                    <li><Link to="/dashboard/addItem">Add Product</Link></li>
                    <li><Link to="/dashboard/manage">Manage Product</Link></li>
                        </>
                    } 
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;