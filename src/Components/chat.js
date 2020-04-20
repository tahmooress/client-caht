import React, { Component } from "react";


class Chat extends Component{ 
    constructor(props){
        super(props)
       
        this.state = {
            Msg : "",
            ID: "",
            To: "",
            Rec: ""
        }
        this.send=this.send.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleEneter=this.handleEneter.bind(this);
    }
    socket = new WebSocket("ws://localhost:8000/ws")
    componentDidMount(){
        this.socket.onopen = ()=>{
            console.log("webscoket oppened")
        }
        this.socket.onerror = ()=>{
            console.log("error")
        }
        this.socket.close= ()=>{
            console.log("connection closed")
        }
        this.socket.onmessage = (e)=>{
            var msg = JSON.parse(e.data)
            this.setState({
                Rec:msg.Msg
            })
        }
    }
    handleEneter(event){
       if (event.key === 'Enter'){
           this.send()
       }
    }
    handleChange(event){
        const name = event.target.name
        this.setState({
            [name] : event.target.value
        });
        console.log(this.state)
    }
    send(){

        this.socket.send(JSON.stringify(this.state))
        // this.setState({
        //     Msg: "",
        // })
    }
    render(){
       
        return(
            <div>
                    <label type="text" name="setID">
                     your ID:
                        <input  type="text" name="ID" onChange={this.handleChange} value={this.state.ID}/>
                    </label>
                    <label type="text" name="selectTo"> 
                    your target ID:
                        <input  type="text" name="To" onChange={this.handleChange} value={this.state.To} />
                    </label>
                    <label type="text" name="message" > 
                    your Message
                        <input  type="text" name="Msg" onChange={this.handleChange} value={this.state.Msg} onKeyPress={this.handleEneter} />
                    </label> 
                    <button id="send" onClick={this.send} >Send</button>
                    <textarea value={this.state.Rec}></textarea>
            </div>
        )
    }
}

export { Chat }