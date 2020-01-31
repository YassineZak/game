import React, { Component } from "react";
import ModalError from "./ModalError";
import $ from 'jquery';
import 'bootstrap';


export default class Connexion extends Component {


    state = {
        username: "",
        pwd: "",
        repeatPwd: "", 
        email: "",
        isConnected: false,
        errorApi:null, 
        errorUser: 'Something goes wrong !!'
    }

    handleUsername = (event) => {
        const username = event.target.value
        this.setState({username})
    }
    handlePwd = (event) => {
        const pwd = event.target.value
        this.setState({pwd})
    }
    handleRepeatPwd = (event) => {
        const repeatPwd = event.target.value
        this.setState({repeatPwd})
    }
    handleUserEmail = (event) => {
        const email = event.target.value
        this.setState({email})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const db = this.props.db
        const { email, pwd, repeatPwd } = this.state; 
        if (pwd !== repeatPwd){
            const errorUser = "seems that's not the same password in the two fields !!"
            this.setState({errorUser})
            $("#modalError").modal('show')
        }else{
                db.doCreateUserWithEmailAndPassword(email, pwd)
            .then(authUser => {
                this.setState({ ...this.state })
                let isConnected = true;
                this.setState({isConnected})
                })
            .catch(error => {
                this.setState({ error })
                $("#modalError").modal('show')
            });
            }
        }
        


    render(){
        return (
                <>
                <ModalError error={this.state.error ? this.state.error.message : this.state.errorUser}></ModalError>
                <div className="materialContainer">
                    <div className="box">
                    <div className="title">LOGIN</div>

                    <div className="input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <span className="spin"></span>
                    </div>

                    <div className="input">
                    <label htmlFor="name">Username</label>
                    <input type="text" name="name" id="name" />
                    <span className="spin"></span>
                    </div>

                    <div className="input">
                    <label htmlFor="pass">Password</label>
                    <input type="password" name="pass" id="pass" />
                    <span className="spin"></span>
                    </div>

                    <div className="button login">
                        <a href="#myModal" className="trigger-btn" data-toggle="modal">
                    <button>
                            <span>GO</span> <i className="fa fa-check"></i>
                    </button>
                        </a>
                    </div>

                    <a href="google.com" className="pass-forgot">
                    Forgot your password?
                    </a>
                    </div>

                <div className="overbox">
                    <div className="material-button alt-2">
                    <span className="shape"></span>
                    </div>

                    <div className="title">REGISTER</div>
                    <form onSubmit={this.handleSubmit}>

                        <div className="input">
                        <label htmlFor="regname">Username</label>
                        <input type="text" name="regname" id="regname" value={this.state.username} onChange={this.handleUsername} />
                        <span className="spin"></span>
                        </div>

                        <div className="input">
                        <label htmlFor="regemail">Email</label>
                        <input type="email" name="regemail" id="regemail" value={this.state.email} onChange={this.handleUserEmail} />
                        <span className="spin"></span>
                        </div>

                        <div className="input">
                        <label htmlFor="regpass">Password</label>
                        <input type="password" name="regpass" id="regpass" value={this.state.pwd} onChange={this.handlePwd}/>
                        <span className="spin"></span>
                        </div>

                        <div className="input">
                        <label htmlFor="reregpass">Repeat Password</label>
                        <input type="password" name="reregpass" id="reregpass" value={this.state.repeatPwd} onChange={this.handleRepeatPwd}/>
                        <span className="spin"></span>
                        </div>

                        <div className="button">
                        <button 
                            type="submit">
                        <span>NEXT</span>
                        </button>
                        </div>
                        </form>
                </div>
            </div>
            </>
        );
    }
};
