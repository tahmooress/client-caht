import React,{ Component } from "react";
import { Button, Form } from "react-bootstrap";
import {httpReq} from "./test";

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            newUser : false,
            loginResult : false,
            user : {
                email : "",
                password : ""
            },
            response : ""
        }
        this.newUserState = this.newUserState.bind(this);
        this.userState = this.userState.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.checkUser = this.checkUser.bind(this);
    }
    newUserState(){
        this.setState({
            newUser : true
        })    
    }
    handleEmail(e){
        let email = e.target.value;
        let currentState = {...this.state.user};
        currentState.email = email;
        this.setState({
            user : currentState
        })
       console.log(this.state)
    }
    handlePassword(e){
        let password = e.target.value;
        let currentState = {...this.state.user};
        currentState.password = password;
        this.setState({
            user : currentState
        })
       console.log(this.state)
    
    }   
    checkUser(){
        const url = "http://localhost:8000/login";
        fetch(url,{
            mode : "no-cors",
            cache: 'no-cache',
            credentials: 'same-origin',
            method : "POST",
            body : JSON.stringify(this.state.user),
            headers : {
                'Content-Type': 'application/json',
            }
        }).then((response)=>{
            if(response.ok){
                return response.text();
            }
            throw Error(response.status)
        }).then((txt)=>{
            console.log(txt)
        }).catch(err=>alert(err))
    }
    userState(){
        this.setState({
            newUser : false
        })
    }
    render(){
           return(
            <div>
                <Button  onClick={this.newUserState}>Sign in to continue</Button><Button onClick={this.userState}>Sign Up to continue</Button>
                {this.state.newUser ?
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>  
                        <Form.Control onChange={this.handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text  className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.checkUser} variant="danger" type="submit">
                        Log in
                    </Button>
                </Form>
                :
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>  
                        <Form.Control  onChange={this.handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  onChange={this.handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.checkUser} variant="danger" type="submit">
                        Register
                    </Button>
                </Form>}
            </div>
           )
        
    }
}

export { Login }