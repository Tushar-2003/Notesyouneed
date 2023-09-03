import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from './Components/Navbar/Navber';
import Footer from './Components/Footer/Footer';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

const Layout = () =>{
  return(
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};


const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children: [
    {
      path:"/",
      element:<Home />
    },
    {
      path:{Login},
      element:<Login />
    },
    // {
    //   path:"/product/:id",
    //   element:<Product />
    // },
  ],},
  ]);

function App() {
  return (
    
    <body>
    <div className="App">
        <RouterProvider router={router}/>
    </div>
    </body>
   
  );
}

export default App;
