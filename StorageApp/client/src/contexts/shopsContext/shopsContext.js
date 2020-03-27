import React, { createContext, useReducer } from 'react';
import { shopsReducer } from './shopsReducer';

export const ShopContext = createContext();

const ShopContextProvide = (props) => {

    const [shops, dispatch] = useReducer(shopsReducer, [
        {id:1, name: 'Драгор', notice: 'Първи М-н'},
        {id:2, name: 'Пазарджик', notice: 'Втори М-н'}
    ]);

    return (
        <ShopContext.Provider value={{ shops, dispatch }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvide;