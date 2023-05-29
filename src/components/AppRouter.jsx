import React from "react";
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";


import { MainPage } from "../pages/main-pages/MainPage";
import { ErrorPages } from "../pages/ErrorPages";
import { Posts } from "../pages/Posts";
import { UserInfo } from "../pages/UserInfo";
import { About } from "../pages/About";


const router = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        children: [
            {
                errorElement: <ErrorPages />,
                children: [
                    {
                        index: true,
                        element: <Posts />
                    },
                    {
                        path: 'user/:id',
                        element: <UserInfo />,
                    },
                    {
                        path: 'about',
                        element: <About />,
                    },
                    {
                        path: '*',
                        element: < ErrorPages />,
                    },
                ],
            },
        ],
    },
]);


export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}
