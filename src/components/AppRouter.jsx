import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


import { MainPage } from "./main-pages/MainPage";
import { ErrorPages } from "../pages/ErrorPages";
import { Posts } from "./posts/Posts";


const router = createBrowserRouter([
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
