import './ProductInfo.sass';

import React, {useState,useEffect} from "react";

function ProductInfo({match}) { {/*в мэтч лежит айдишник нашего продукта*/}
    let id = match.params.id;

    useEffect(()=>{
        addToCart()
        console.log(id)
        }
    ,[])

    //нужно прописать фетч запрос к серверу чтобы забрать по айди инфу о товаре


    const [item, setItem] = useState({});

    //получаем с сервера продукт по айди
    const fetchItem = async () =>{
        const data = await fetch(
            `http://localhost:8090/producer/${id}`
        );
        const product = await fetchItem.json();
        console.log(product)
    }
    function addToCart(){

    }


    return (
        <div className="content">
            <div className="header_bg"></div>
            <div className="catalog">
                <div className="container">
                    <h2 className="title">{item.name}</h2>

                    <div className="product_info">
                        <div className="flex_info_block">
                            <div id="info_img_block">
                                <img id="info_img" src={item.img}/>
                            </div>
                            <div className="text_info">
                                <table>
                                    <tr>
                                        <td className="ht">
                                            <h3>Название</h3>
                                        </td>
                                        <td><span id="name">{item.name}</span></td>
                                    </tr>
                                    <tr>
                                        <td className="ht">
                                            <h3>Тип</h3>
                                        </td>
                                        <td><span id="category">{item.type}</span></td>
                                    </tr>
                                    <tr>
                                        <td className="ht">
                                            <h3>Цена</h3>
                                        </td>
                                        <td><span>От <span id="cost">{item.price}</span> ₽</span></td>
                                    </tr>
                                    <tr>
                                        <td className="ht">
                                            <h3>Производитель</h3>
                                        </td>
                                        <td><span id="producer">{item.producer}</span></td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                        <div id="cart_button">
                            <button className="to_cart_button" onClick={addToCart}>В корзину</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
);
}

export default ProductInfo;