import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Shooter from './components/Shooter/Shooter';
import Mmorpg from './components/Mmorpg/Mmorpg';
import Sailing from './Sailing/Sailing';
import Pixel from './components/Pixel/Pixel';
import Permadeath from './components/Permadeath/Permadeath';
import Superhero from './components/Superhero/Superhero';
import GameDetails from './components/GameDetails/GameDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserContextProvider from './Context/userContext';
import ProdcuttedRoute from './components/prodcutedRout/ProdcuttedRoute';
import Notfound from './components/Notfound/Notfound';




export default function App() {

  let router = createHashRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <ProdcuttedRoute><Home /></ProdcuttedRoute> },
      { path: 'Shooter', element: <ProdcuttedRoute><Shooter /></ProdcuttedRoute> },
      { path: 'Mmorpg', element: <ProdcuttedRoute><Mmorpg /></ProdcuttedRoute> },
      { path: 'Sailing', element: <ProdcuttedRoute><Sailing /></ProdcuttedRoute> },
      { path: 'Permadeath', element: <ProdcuttedRoute><Permadeath /></ProdcuttedRoute> },
      { path: 'Pixel', element: <ProdcuttedRoute><Pixel /></ProdcuttedRoute> },
      { path: 'Superhero', element: <ProdcuttedRoute><Superhero /></ProdcuttedRoute> },
      { path: 'game/:id', element: <ProdcuttedRoute><GameDetails /> </ProdcuttedRoute> },
      { path: 'Register', element: <Register /> },
      { path: 'Login', element: <Login /> },
      { path: '*', element: <Notfound /> },
    ]
  }])
  return <>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </>
}
