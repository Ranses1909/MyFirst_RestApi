import React from 'react';
// https://www.upgrad.com/blog/react-project-ideas-topics-beginners/
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
// import pages
import Navbar from './components/Navbar';
import SingleKeyboard from './pages/SingleKeyboard';
import Home from './pages/Home';
import Testing from './pages/Testing'

// in order to let react know that is a componet use capital Case
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      // errorElement: <ErrorPage />,
    },
    // {
    //   path: "/details/:_id",
    //   element: <Testing/>,
    //   // errorElement: <ErrorPage />,
    // },
    {
      path: "details/:id",
      element: <SingleKeyboard />,
    },
  ]);
      return (
        <>
        <Navbar/>
        {/* self closing component */}
        <RouterProvider router={router} />
        </>
    )
  }

export default App;