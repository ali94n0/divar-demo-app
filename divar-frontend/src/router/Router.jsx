
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AuthPage from 'pages/AuthPage';
import DashboardPage from 'pages/DashboardPage';
import AdminPage from 'pages/AdminPage';
import NotFoundPage from 'pages/NotFoundPage';
import useUser from 'src/hooks/useUser';
import Loader from 'components/modules/Loader';





const Router = () => {

    const { user,isLoading } = useUser()
    if(isLoading)return <Loader/>
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={user ? <AuthPage/> : <Navigate to={"/"}/> } />
            <Route path='/dashboard' element={(user && user.role === "USER") ? <DashboardPage/> : <Navigate to={"/auth"}/>} />
            <Route path='/admin' element={(user && user.role === "ADMIN") ? <AdminPage/> : <Navigate to={"/dashboard"}/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    );
};

export default Router;