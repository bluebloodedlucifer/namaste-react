import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
    constructor(props){
        super(props);
        console.log("AboutClass Constructor")
    }
    async componentDidMount(){
        console.log("AboutClass Component Did mount")
    }

    render(){
        console.log("AboutClass Render")
        return (
                <div>
                    <h1>About US</h1>
                    <h2>This is Namaste React Web Series</h2>
                    <UserClass name = {'Aryan Panchal Class'} location = {'bahadurgarh class'}/>
                    <UserClass name = {'Elon Musk Class'} location = {'USA class'}/>
                </div>
        )
    }
}

export default AboutClass;