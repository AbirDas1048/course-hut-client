import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CheckOut from "../pages/Courses/CheckOut";
import CourseDetails from "../pages/Courses/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Blog from "../pages/Other/Blog";
import FAQ from "../pages/Other/FAQ";
import Home from "../pages/Other/Home";
import SignUp from "../pages/SignUpSignIn/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/featuredCourse'),
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: () => fetch('http://localhost:5000/featuredCourse'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:courseId',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.courseId}`);
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkOut/:courseId',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.courseId}`);
                },
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
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
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <div className="text-center text-danger my-5">
                    <h3>404 Page Not Found</h3>
                </div>
            }
        ]
    }

])