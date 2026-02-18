import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js";
import Rescard_menu from "./components/Rescard_menu.js";

import Footer from "./components/Footer,.js";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";




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

const App =()=>{
  return (
   <div className="app">
    <Header />
    <Outlet /> 
    <Footer />
   </div>
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
        path: "restaurants/:resid",
        element: <Rescard_menu />,
      },
    ],
  },
]);






const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

