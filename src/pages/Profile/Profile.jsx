import './Profile.sass';

import {tirePng, diskPng, accessoriesPng, oilPng, cosmeticsPng, toolsPng, profileImg} from '../../assets/images';
import React from "react";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";
import ProfileServices from "../../components/ProfileServices/ProfileServices";



function Profile(props) {
    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <div className="profile_box">
                        <img src={profileImg}/>
                        <h1 className="profile_box-first_header">{props.user.name}</h1>
                        <table className="profile_box-data">
                            <tr>
                                <td>
                                    <h2>E-mail</h2>
                                </td>
                                <td className="profile_value">{props.user.email}</td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Телефон</h2>
                                </td>
                                <td className="profile_value">{props.user.phone}</td>
                            </tr>
                        </table>


                        <button className="log_out_button">Выйти</button>


                        <h1 className="profile_box-second_header">Расписание услуг</h1>
                        <div className="profile_box-list_of_services">
                            {props.services.map((service) => <ProfileServices service={service}/>)}
                        </div>

                        <div className="split_line"></div>


                        <h1 className="profile_box-third_header">Текущие заказы</h1>
                        <div className="profile_box-list_of_orders">
                            {props.orders.map((order)=><ProfileOrders order={order} />)}
                        </div>

                        <hr width="0"></hr>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;