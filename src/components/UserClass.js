import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {}
        };
    };
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/SkyCoderAakash");
        const json = await data.json();
        this.setState({userInfo : json});
    }
    render(){
        const {name,login,id} = this.state.userInfo;
        return(
            <div className='userCard'>
                <h1>User Detail</h1>
                <h3>name : {name}</h3>
                <h3>id : {id}</h3>
                <h3>userName : {login}</h3>
            </div>
        )
    }
}

export default UserClass;