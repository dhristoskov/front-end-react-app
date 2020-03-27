import React, {createContext, useReducer} from 'react';
import { requestReducer } from './requestReducer';

export const RequestContext = createContext();

const RequestContextProvider = (props) => {

    const [requests, dispatch] = useReducer(requestReducer, [
        {id: 1, product:'Домати', quantity: '20', price: '2.50', shop: 'Драгор', sum: '50.00', done: false},
        {id: 2, product:'Сирене', quantity: '10', price: '5.50', shop: 'Пазарджик', sum: '55.00', done: false}
    ]);

    return(
        <RequestContext.Provider value={{requests, dispatch}}>
            {props.children}
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;