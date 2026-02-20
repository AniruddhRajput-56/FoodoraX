import React from "react";


class UserClass extends React.Component{
        
    constructor(props){
    //JavaScript does not allow using this . Until parent class constructor is executed
    //super() is used to call parent class constructor and it must be called before using this keyword in constructor
    //super(props)  →  initialize parent
    //this.state    →  initialize child

    super(props);


    // this is object which is used to store data in class component and it can be updated using setState() method
    //big object which is used to store all state variables in  the  classcomponent
    this.state={
            count:0
        }

        console.log(" child Constructor is called");
    }

    componentDidMount(){
        console.log(" child componentDidMount is called");
    }
       
     
    render(){
        console.log(" child Render is called");
        const {name, location, contact} = this.props;
        const {count} = this.state;
        return(
            <div className="userclass">
                <h2>User Class Component</h2>
                <h3>Count : {count}</h3>
                <button 
                onClick={()=>
                    //this.setState ( {updated value} ); updated 
                this.setState(
                    {count: count+1}

                )}>Increment</button>
                
                <p>Name : { name}</p>
                <p>Location : { location}</p>
                <p>Contact : { contact}</p>
            </div>
        )
    }
};

export default UserClass;