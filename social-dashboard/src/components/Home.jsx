
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
/*
<div class="transition-all duration-300 w-full ">
    <header class="bg-gray-50 text-gray-900 shadow-sm border-b border-gray-200">
        <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class=" flex items-center gap-3">
                </div>
                <div class="flex items-center gap-6">
                    <nav class="hidden md:flex gap-6"><a href="#xxx" class="text-gray-700 hover:text-gray-900 transition-colors font-bold">Home</a>  <a href="#xxx" class="text-gray-700 hover:text-gray-900 transition-colors font-bold">Features</a>  <a href="#xxx" class="text-gray-700 hover:text-gray-900 transition-colors font-bold">Pricing</a>  <a href="#xxx" class="text-gray-700 hover:text-gray-900 transition-colors font-bold">Contact</a>

                    </nav>
                    <div class="hidden md:flex gap-2"><a href="#xxx" class="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">Login</a>  <a href="#xxx" class="px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 transition-colors">Sign Up</a>

                    </div>
                </div>
            </div>
            
        </div>
    </header>

    <section class="bg-white py-20 px-4">
        <div class="max-w-6xl mx-auto px-6 lg:px-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div class="text-center lg:text-left">
                    <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Blog</h1>

                    
                    <p class="text-xl md:text-2xl mb-8 text-gray-600">Find out what others have posted</p>

                </div>
                <div class="order-first lg:order-last">
                </div>
                
            </div>
        </div>

    </section>

    <section class="py-20 px-4 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h2> 

            <div class="px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 text-lg tracking-tight">
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="flex flex-row">
                            <div class="pl-2 pr-6">
                                <div class="flex w-12 h-12 rounded-md bg-primary-700 text-gray-200 items-center justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-xl font-semibold text-gray-800 pb-2">Lightning Fast</h3> 
                                <p class="text-gray-700">Experience blazing fast performance with our optimized platform that delivers exceptional user experiences</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="flex flex-row">
                            <div class="pl-2 pr-6">
                                <div class="flex w-12 h-12 rounded-md bg-primary-700 text-gray-200 items-center justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-xl font-semibold text-gray-800 pb-2">Secure &amp; Reliable</h3> 
                                <p class="text-gray-700">Your data is protected with enterprise-grade security measures and continuous monitoring</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="flex flex-row">
                            <div class="pl-2 pr-6">
                                <div class="flex w-12 h-12 rounded-md bg-primary-700 text-gray-200 items-center justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-xl font-semibold text-gray-800 pb-2">Responsive Design</h3> 
                                <p class="text-gray-700">Optimized for all devices with a responsive design that works perfectly on mobile and desktop</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <div class="flex flex-row">
                            <div class="pl-2 pr-6">
                                <div class="flex w-12 h-12 rounded-md bg-primary-700 text-gray-200 items-center justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <h3 class="text-xl font-semibold text-gray-800 pb-2">Loved by Users</h3> 
                                <p class="text-gray-700">Join thousands of satisfied customers who trust our solution for their business needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="py-20 px-4 bg-white">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What others say</h2> 

            <div class="space-y-12">
                <div class="max-w-2xl">

                    <p class="text-gray-600 mb-4 text-lg">"This product completely transformed our business operations. The results speak for themselves!"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>

                        </div>

                        <div>
                            <div class="font-semibold text-gray-800">Sarah Johnson</div>
                            <div class="text-sm text-gray-500">CEO, TechCorp</div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl">

                    <p class="text-gray-600 mb-4 text-lg">"Outstanding support and amazing features. Highly recommend to anyone looking for a high-quality product."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                        </div>

                        <div>
                            <div class="font-semibold text-gray-800">Michael Chen</div>
                            <div class="text-sm text-gray-500">Founder, StartupXYZ</div>
                        </div>
                    </div>
                </div>
                <div class="max-w-2xl">

                    <p class="text-gray-600 mb-4 text-lg">"Game-changing solution that saved us countless hours. The team loves using it every day!"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>

                        </div>

                        <div>
                            <div class="font-semibold text-gray-800">Emily Rodriguez</div>
                            <div class="text-sm text-gray-500">CTO, InnovateLab</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>
*/
