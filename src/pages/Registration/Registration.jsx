import './Registration.sass';


import {NavLink} from "react-router-dom";


function Registration() {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <div className="registration_box">
                        <h1>Регистрация</h1>
                        <div className="form_box">
                            <form action="">
                                <input type="text" placeholder="Имя"/><br/>
                                <input type="text" placeholder="Фамилия"/><br/>
                                <input type="tel" placeholder="Телефон"/><br/>
                                <input type="email" placeholder="E-mail"/><br/>
                                <input type="password" placeholder="Пароль"/>
                                <button className="registration_button">Войти</button>
                            </form>
                            <p id="offer_to_log_in">Уже зарегистрированы?<NavLink to="/authorization">Войдите!</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;