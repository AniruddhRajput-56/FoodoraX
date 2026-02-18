import User from "./User";
import UserClass from "./userclass";
import {Component} from "react"; // destructure 


class About extends Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor is called");
    }

    componentDidMount(){
        console.log("Parent componentDidMount is called");
    };

    render(){
        console.log("Parent Render is called");
         return(
        <div>
            <h1>This is About Us Page</h1>
            {/* <User name={"Aniruddh"} location={"India"} contact={"1234567890"}/> */}
            <UserClass name={"Aniruddh"} location={"India"} contact={"1234567890"}/>

        </div>
         );

    };
}
export default About;