import React, { useContext , Fragment} from 'react';
import { RequestContext } from '../../contexts/requestContext/requestContext';
import { AiOutlineDelete } from 'react-icons/ai';


const RequestItem = ({ request }) => {
    
    const { dispatch } = useContext(RequestContext);
 
    return(
        <div className='listItem'>
            <div className='components'>  
                <input className='checkbox' type="checkbox" checked={request.done} onChange={({ target }) => 
                dispatch({type:target.checked ? 'DONE_REQUEST' : 'UNDONE_REQUEST', id: request.id})} />              
                <p>{request.product}</p>
                <p>{request.shop}</p>
                <p>Кол.: <span>{request.quantity}</span></p>
                <p>{request.price} лв.</p>
                <p>{request.sum} лв.</p>
            </div>
            <div className='settings'>{ !request.done ? (
                <Fragment>
                      <p onClick={() => dispatch({type: 'REMOVE_REQUEST', id: request.id})}><AiOutlineDelete /></p>
                </Fragment>
                ) : (
                    <p onClick={() => dispatch({type: 'REMOVE_REQUEST', id: request.id})}><AiOutlineDelete /></p>
                )}
            </div>     
        </div> 
    )
}
export default RequestItem;