import {createRoot} from "react-dom/client";
import {App} from "./components/app";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyAbout, LazyShop} from "./page";
import {Suspense} from "react";

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><LazyShop/></Suspense>
            }
        ]
    },
]);

container.render( <RouterProvider router={router} /> )