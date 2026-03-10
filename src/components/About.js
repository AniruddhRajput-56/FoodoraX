// import UserClass from "./UserClass";
// import User from "./User";

// import {Component} from "react"; // destructure 


// class About extends Component{

//     constructor(props){
//         super(props);

//         console.log("Parent Constructor is called");
//     }

//     componentDidMount(){
//         console.log("Parent componentDidMount is called");
//     };

//     render(){
//         console.log("Parent Render is called");
//          return(
//         <div>
//             <h1>This is About Us Page</h1>
//             {/* <User name={"Aniruddh"} location={"India"} contact={"1234567890"}/> */}
//             <UserClass name={"Aniruddh"} location={"India"} contact={"1234567890"}/>

//         </div>
//          );

//     };
// }
// export default About;

const About = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4 max-w-2xl mx-auto">
        Welcome to{" "}
        <span className="font-semibold text-yellow-600">FoodoraX 🍽️</span> – FoodoraX
         is an online platform where you can explore various restaurants and
        view their menus. It uses the Swiggy API to fetch real-time restaurant
        and food data.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">🚀 App Highlights</h2>
        <ul className=" space-y-2 text-left text-lg mb-4 max-w-2xl mx-auto">
  <li>🔍 Smart Search – Quickly find your favorite restaurants using the search feature.</li>
  <li>⭐ Top-Rated Filter – Filter and explore highly rated restaurants easily.</li>
  <li>📋 Detailed Menus – View complete restaurant menus with pricing and ratings.</li>
  <li>🛒 Cart Functionality – Add items to your cart with seamless state management using Redux.</li>
  <li>⚡ Fast Performance – Implemented lazy loading and shimmer UI for a smooth loading experience.</li>
  <li>📱 Fully Responsive Design – Optimized for mobile, tablet, and desktop devices.</li>
  <li>🎨 Clean UI/UX – Built with Tailwind CSS for a modern and minimal design.</li>
</ul>
      </div>
    </div>
  );
};

export default About;