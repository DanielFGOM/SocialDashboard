import React, { lazy, Suspense } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
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


function App(){
  const {isAutenticated} = useAuth0();
  return(
    <div className="app">
      <header className='login-header'>
                {!isAuthenticated && <LoginButton/>}
                {!isAuthenticated && <LogoutButton/>}
            </header>
            
      
    </div>

  );
  
}
function Layout(){
    return (
        <>
        <nav>
        <Link to="/Home">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Posts">Posts </Link>
        <Link to="/Users">Users </Link>
        </nav>
        <Suspense fallback={<h1>Loading..</h1>}>
        <Outlet/>
        </Suspense>
        </>
    )

}

export default App