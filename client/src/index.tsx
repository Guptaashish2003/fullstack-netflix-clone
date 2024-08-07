import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './(pages)/Home';
import LandingPage from './components/LandingPage/LandingPage';
import SignIn from './(pages)/SignIn';
import SignUp from './(pages)/SignUp';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import Play from './components/PlayVids/Play';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element:<Home/>
  },
  {
    path:"/LandingPage",
    element:<LandingPage/>
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/Play/:id",
    element: <Play/>,
  },

]);

const store =createStore({
  authName:"_auth",
  authType:"cookie",
  cookieDomain:window.location.hostname,
  cookieSecure:false,
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider store={store}>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

