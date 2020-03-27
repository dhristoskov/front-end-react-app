import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/shopsContext/shopsContext';
import { AiOutlineDelete } from 'react-icons/ai';

const ShopItem = ({ shop }) => {

    const { dispatch } = useContext(ShopContext);

    return(
        <div className='listItem'>  
            <p>Име: <span>{shop.name}</span></p>
            <p>Бележка: <span>{shop.notice}</span></p>
            <div className='settings'>
                <p onClick={() => dispatch({type: 'REMOVE_SHOP', id: shop.id})}><AiOutlineDelete /></p>
            </div>   
        </div>
    )
}

export default ShopItem;