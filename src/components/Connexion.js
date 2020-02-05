import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import ModalError from "./ModalError";
import $ from 'jquery';
import 'bootstrap';


export default class Connexion extends Component {


    state = {
        username: "",
        pwd: "",
        repeatPwd: "", 
        email: "",
        emailReset: '',
        isConnected: false,
        errorApi:null, 
        errorUser: 'Something goes wrong !!',
        notice: null
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
    handleUserEmailReset = (event) => {
        const emailReset = event.target.value
        this.setState({emailReset})
    }

    handleRegistration = (event) => {
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
                this.sendUser()
                //this.setState({ isConnected: true})
                })
            .catch(error => {
                this.setState({ error })
                $("#modalError").modal('show')
            });
            }
        }

    handleSignIn = (event) => {
        event.preventDefault()
        const db = this.props.db
        const { email, pwd } = this.state
        db.doSignInWithEmailAndPassword(email, pwd)
            .then(authUser => {
                this.sendUser()
                this.setState({ isConnected: true})
                })
            .catch(error => {
                this.setState({ error })
                $("#modalError").modal('show')
            });
    }

    handleResetPassword = (event) => {
        event.preventDefault()
        const db = this.props.db
        const { email } = this.state
        db.doPasswordReset(email)
            .then(authUser => {
                this.handleBackConnexion()
                })
            .catch(error => {
                $('#resetPassword').hide()
                $('#login').show()
                this.setState({ error })
                $("#modalError").modal('show')
            });
    }

    handleClickResetPassword = (event) => {
        event.preventDefault()
        $('#login').hide()
        $('#resetPassword').show()
    }
    handleBackConnexion = (event) => {
        event.preventDefault()
        $('#resetPassword').hide()
        $('#login').show()
    }

    sendUser = () => {
        const { username } = this.state;
        this.props.username (username);
    }
        


    render(){
        const { isConnected } = this.state;
        if (isConnected){
            return <Redirect to='/game' />
        }
        return (
                <>
                <ModalError error={this.state.error ? this.state.error.message : this.state.errorUser}></ModalError>
                <div className="materialContainer">
                    <div className="box" id="login">
                        <form onSubmit={this.handleSignIn}>
                            <div className="title">LOGIN</div>

                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleUserEmail} required/>
                                <span className="spin"></span>
                            </div>

                            <div className="input">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" value={this.state.pwd} onChange={this.handlePwd} required/>
                                <span className="spin"></span>
                            </div>

                            <div className="button login">
                                <button>
                                <span>GO</span> <i className="fa fa-check"></i>
                                </button>
                            </div>

                            <a href="google.com" className="pass-forgot" onClick={this.handleClickResetPassword}>
                            Forgot your password?
                            </a>
                        </form>
                    </div>

                <div className="overbox">
                    <div className="material-button alt-2">
                    <span className="shape"></span>
                    </div>

                    <div className="title">REGISTER</div>
                    <form onSubmit={this.handleRegistration}>

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
                <div className="box" id="resetPassword">
                        <form onSubmit={this.handleResetPassword}>
                            <div className="title">Reset Password</div>

                            <div className="input">
                                <label htmlFor="emailReset">Email</label>
                                <input type="email" name="emailReset" id="emailReset" value={this.state.emailReset} onChange={this.handleUserEmailReset} required/>
                                <span className="spin"></span>
                            </div>
                            <div className="button login">
                                <button type='submit' onClick={this.handleResetPassword}>
                                <span>Reset</span> <i className="fa fa-check"></i>
                                </button>
                            </div>
                            <a href="#none" className="pass-forgot" id="connexionBack" onClick={this.handleBackConnexion}>
                            Connexion page
                            </a>
                        </form>
                    </div>
            </div>
            </>
        );
    }
};

