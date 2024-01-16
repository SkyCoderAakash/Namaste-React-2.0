import React, { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client.js';
import Body from './components/Body';
import Body2 from './components/Body2';
import Header from './components/Header';
import Footer from './components/Footer';
import {createBrowserRouter , RouterProvider , Outlet} from 'react-router-dom';
// import About from './components/About';
const About = lazy(()=> import('./components/About'));
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import RestaurentMenu from './components/RestaurentMenu';

const AppLayout = ()=>{
    return(
       <div className='app'>
        <Header/>
        <Outlet/>
        <Footer />
       </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children:[
            {
                path:'/',
                element:<Body2/>
            },
            {
                path:'/about',
                element: <Suspense fallback={<h1>Loading about</h1>}><About/></Suspense>
            },
            {
                path:'/contact',
                element: <Contact />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
                path:'/restaurent/:resId',
                element: <RestaurentMenu />
            },
            {
                path:'*',
                element: <NotFound />
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);