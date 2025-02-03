import './App.css'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';

let R = createBrowserRouter([
  {
    path: '', element: <Layout /> ,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <Notfound /> }
    ]
  },
])

function App() {
  return <RouterProvider router={R}></RouterProvider>
  // return(
  //   <Layout />
  // )
}
export default App
