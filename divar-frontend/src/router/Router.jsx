
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';
import AdminPage from 'pages/AdminPage';
import NotFoundPage from 'pages/NotFoundPage';
import useUser from 'src/hooks/useUser';
import Loader from 'components/modules/Loader';
import { useEffect } from 'react';





const Router = () => {

    const { user, isLoading } = useUser()
    
    

    if(isLoading)return <Loader/>
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={(user) ? <Navigate to={"/dashboard"}/> : <AuthPage/> } />
            <Route path='/admin' element={( user && user.role === "ADMIN") ? <AdminPage/> : <Navigate to={"/dashboard"}/>} />
            <Route path='/dashboard' element={(user && (user.role === "USER" || user.role === "ADMIN")) ? <DashboardPage/>  : <Navigate to={"/auth"}/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    );
};

export default Router;