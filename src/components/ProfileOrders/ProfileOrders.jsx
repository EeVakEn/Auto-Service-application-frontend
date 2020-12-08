import '../../pages/Profile/Profile.sass';

function ProfileOrders(props) {
    return(
        <div key={props.order.id} className="order_one">
            <div className="order_one-img_holder">
                <img src={props.order.img} alt=""/>
            </div>
            <div className="order_one-info">
                <p>{props.order.name}</p>
            </div>
            <div className="order_one-count">
                {props.order.counter} шт.
            </div>
            <div className="order_one-price">
                {props.order.price} ₽
            </div>
        </div>
    )
}
export default ProfileOrders;