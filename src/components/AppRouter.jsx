import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Posts } from "../pages/Posts";
import { MainPage } from "./main-pages/MainPage";
import { ErrorPages } from "../pages/ErrorPages";


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
