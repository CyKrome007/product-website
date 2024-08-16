import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout, Home, About, Contact, Github, User} from "./components/Index";
import baseUrl from "./assets/BaseUrl.js";
import {githubInfoLoader} from "./components/Github/Github.jsx";

const router = createBrowserRouter([
    {
        path: baseUrl,
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "user/:userid",
                element: <User />
            },
            {
                path: "github",
                element: <Github/>,
                loader: githubInfoLoader
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
