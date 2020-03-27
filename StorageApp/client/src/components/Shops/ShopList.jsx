import React, { useContext } from 'react';
import { ShopContext } from '../../contexts/shopsContext/shopsContext';
import ShopItem from './ShopItem';

const ShopList = () => {
    const { shops } = useContext(ShopContext);

    return( shops.length ? (
            <div className='shopListContainer'>
                {shops.map(shop => {
                     return(
                        <ShopItem shop={shop} key={shop.id}/>
                    )
                })}        
             </div>
        ) : (
            <div className='shopEmptyList'>Листа с търг.обекти е празен</div>
        )
    )
}

export default ShopList;