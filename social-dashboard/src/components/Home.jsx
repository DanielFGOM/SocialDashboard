
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
export default Home