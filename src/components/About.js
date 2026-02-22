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
        <span className="font-semibold text-yellow-600">Food Zone</span> – Food
        Zone is an online platform where you can explore various restaurants and
        view their menus. It uses the Swiggy API to fetch real-time restaurant
        and food data.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">App Highlights</h2>
        <p className="text-md max-w-xl mx-auto">
          You can search for restaurants, filter top-rated ones, and check
          detailed menus. The app is built using React.js with a clean and
          responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default About;