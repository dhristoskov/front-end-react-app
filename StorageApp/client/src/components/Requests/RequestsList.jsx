import React, { useContext } from 'react';
import { RequestContext } from '../../contexts/requestContext/requestContext';
import RequestItem from './RequestItem';

const RequestsList = () => {

    const { requests } = useContext(RequestContext)

    return requests.length ? (
        <div className='listContainer'>
            {requests.map(request => {
                return(
                    <RequestItem request={request} key={request.id}/>
                    )
                })}        
        </div>
    ) : (
        <div className='emptyList'>Request List is empty</div>
    )
}

export default RequestsList;