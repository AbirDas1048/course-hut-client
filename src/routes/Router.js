import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Courses from "../pages/Courses/Courses";
import Blog from "../pages/Other/Blog";
import FAQ from "../pages/Other/FAQ";
import Home from "../pages/Other/Home";
import Profile from "../pages/Other/Profile";
import SignUp from "../pages/SignUpSignIn/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])