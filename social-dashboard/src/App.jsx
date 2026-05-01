import React, { lazy, Suspense } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import{
    BrowserRouter as Router,
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";


const Home = lazy(() => import("./components/Home"));
const Posts = lazy(() => import("./components/Posts"));
const Users = lazy(() => import("./components/Users"));

import { LoginButton } from '../backend/login';
import { LogoutButton } from '../backend/logout';

function AuthRedirect(){
    const{isAutheticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() =>{
        if(isAutheticated){
            navigate('/Home');
        }
    },[isAutheticated]);
}

function App(){
return(
    <div className="app">
    <header className='login-header'>
                <LoginButton/>

                <LogoutButton/>
            </header>
    
    </div>

);

}

function Layout(){
    return (
        <>
        <div>
            <Router>
            <Routes>
                <AuthRedirect />
                <Route path="/" element={<Layout/>}>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Posts" element={<Posts/>}/>
                <Route path="/Users" element={<Users/>}/>
            </Route>
            </Routes>
        </Router>
    
        <nav>
        <Link to="/Home">Home </Link>
        <Link to="/Posts">Posts </Link>
        <Link to="/Users">Users </Link>
        </nav>
        <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet/>
        </Suspense>
        </div>
        </>
    )

}

export default App