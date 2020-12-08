import './Authorization.sass';


import {NavLink} from "react-router-dom";



function Authorization() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <div className="authorization_box">
                        <h1>Авторизация</h1>
                        <div className="form_box">
                            <form action="">
                                <input type="email" placeholder="E-mail"/>
                                <br/>
                                <input type="password" placeholder="Пароль"/>
                                <button className="authorization_button">Войти</button>
                            </form>
                            <p id="offer_to_register">Еще не зарегистрированы?<NavLink to="/registration">Создайте аккаунт!</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Authorization;