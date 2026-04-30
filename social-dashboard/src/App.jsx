import React, { lazy, Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import{
    BrowserRouter as Router,
    Link,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";


const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Posts = lazy(() => import("./components/Posts"));
const Users = lazy(() => import("./components/Users"));

import { LoginButton } from '../../backend/login';
import { LogoutButton } from '../../backend/logout';
import { Profile } from '../../backend/Profile';

function App(){
  return(
    <div className="app">
      <header className='login-header'>
                <LoginButton/>
                <Profile/>
                <LogoutButton/>
            </header>
            <Router>
            <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Posts" element={<Posts/>}/>
            <Route path="/Users" element={<Users/>}/>
            <Route path="/About" element={<About/>}/>
            </Route>
            </Routes>
        </Router>
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