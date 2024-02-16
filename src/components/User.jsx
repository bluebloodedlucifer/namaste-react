import { useState } from "react";

const User = ({name, location}) => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(0);
    return (
        <div className="user-card">
            <h1>{count1}</h1>
            <h1>{count2}</h1>
            <h1>{count3}</h1>
            <button onClick={()=>{
                setCount3(count3+1)
            }}>Click Me</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @aryanpanchal.1999@gmail.com</h4>
            
        </div>
    )
}

export default User;