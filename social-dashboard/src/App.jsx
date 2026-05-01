import React, { lazy, Suspense } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LoginButton } from '../backend/login';
import { LogoutButton } from '../backend/logout';
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



function AuthRedirect(){
    const{isAuthenticated} = useAuth0();
    const navigate = useNavigate();

    useEffect(() =>{
        if(isAuthenticated){
            navigate('/Home');
        }
    },[isAuthenticated]);

    return null;
}

function App(){
return(
    <div className="app">
    <header className='login-header'>
        <Router>
                <AuthRedirect />
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Posts" element={<Posts/>}/>
                    <Route path="/Users" element={<Users/>}/>
                    </Route>
                </Routes>
        </Router>
    
            </header>
    
    </div>

);

}

function Layout(){
    return (
        <>
        <div>    
        <nav>
            <LoginButton/>
            <LogoutButton/> 
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