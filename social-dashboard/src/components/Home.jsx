
function Home(){
    return(
    <div className="home">
        <header className='login-home'>
                </header>
    
    </div>
    )


}
function Layout(){
    return (
        <>
        <div>
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
    
        <nav>
        <Link to="/Home">Home </Link>
        <Link to="/About">About </Link>
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
export default Home