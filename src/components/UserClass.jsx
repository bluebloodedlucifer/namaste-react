import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            userInfo:{
                avatar_url: "default url",
                name: "Default Name",
                urername: "Default username"
            }
        }
        console.log(this.props.name+"UserClass Constructor")
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/bluebloodedlucifer")
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({
            userInfo:{
                avatar_url: jsonData.avatar_url,
                name: jsonData.name,
                username: jsonData.login
            }
        })
    }

    render() {

        const {name, username, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Username: {username}</h3>
                <h4>Contact: @aryanpanchal.1999@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;