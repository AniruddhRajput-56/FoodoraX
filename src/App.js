import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js";
import Rescard_menu from "./components/Rescard_menu.js";
import { useContext, useState } from "react";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appstore.js";
import Cart from "./components/Cart.js";
import Login from "./components/Login.js";
import { Outlet, useLocation } from "react-router-dom";

// lazy loading or code splitting 
// lazy is function takes a function as an argument and that function should return a promise which resolves to a module with a default export containing a React component.
// inside import() we have to give the path of the component which we want to load lazily and it should be a function which returns a promise .
// create a separate chunk for the component which we want to load lazily and that chunk will be loaded only when we need it.
// suspense is a component which is used to wrap the lazy loaded component and it takes a fallback prop which is used to show a fallback UI while the lazy loaded component is being loaded.
const Grocery = lazy(() => import("./components/Grocery"));

// const heading=<h2>Aniruddh</h2>


// const Card=(props)=>{
//      return (
//     <div className="card">
//       <img className="img2" src={props.img}/>
//       <p>{props.title}</p>
//       <p>{props.desc}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };
// react element (object)--> Html element,componet(render)
// react 

const App =()=>{

  const [username , setusername] = useState();
   const location = useLocation(); // ✅ get current route

  useEffect (()=>{
     const data={
      name :"Aniruddh"
     };
     setusername(data.name);
  },[]);

  

  return (
    <Provider store={appStore}>
   <div className="min-h-screen flex flex-col">
    <UserContext.Provider value={{loggedinuser : username , setusername}} >
    {/* ✅ Hide Header only on login */}
          {location.pathname !== "/login" && <Header />}
  <main className="grow">
    <Outlet />
  </main>
  <Footer />
  </UserContext.Provider>
</div>
</Provider>
  );

};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contactus />,
      },
      {
        path: "grocery",
        element: (<Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>),
      },
      {
        path: "restaurants/:resid",
        element: <Rescard_menu />, 
      },
       {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

