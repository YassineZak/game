import React from "react";

const Connexion = () => {
    return (
        <div className="materialContainer">
            <div className="box">
            <div className="title">LOGIN</div>

            <div className="input">
            <label for="name">Username</label>
            <input type="text" name="name" id="name" />
            <span className="spin"></span>
            </div>

            <div className="input">
            <label for="pass">Password</label>
            <input type="password" name="pass" id="pass" />
            <span className="spin"></span>
            </div>

            <div className="button login">
            <button>
            <span>GO</span> <i className="fa fa-check"></i>
            </button>
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

            <div className="input">
            <label for="regname">Username</label>
            <input type="text" name="regname" id="regname" />
            <span className="spin"></span>
            </div>

            <div className="input">
            <label for="regpass">Password</label>
            <input type="password" name="regpass" id="regpass" />
            <span className="spin"></span>
            </div>

            <div className="input">
            <label for="reregpass">Repeat Password</label>
            <input type="password" name="reregpass" id="reregpass" />
            <span className="spin"></span>
            </div>

            <div className="button">
            <button>
            <span>NEXT</span>
            </button>
            </div>
        </div>
    </div>
    );
};

export default Connexion;
