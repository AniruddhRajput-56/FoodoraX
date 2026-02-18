import { useState } from "react";

const User = (props)=>{

    const {name, location, contact} = props;

    const [count, setCount] = useState(0);
    
    return(
        <div className="user">
            <h2>User Functional Component</h2>
                 <h3>Count : {count}</h3>
                 <button onClick={()=>setCount(count+1)}>Increment</button>
                 <button onClick={()=>setCount(count-1)}>Decrement</button>
                <p>Name : { name}</p>
                <p>Location : { location}</p>
                <p>Contact : { contact}</p>
        </div>
    );
};

export default User;    