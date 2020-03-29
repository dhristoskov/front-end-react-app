import React, { useState, useContext } from 'react';
import RequestInfo from '../InfoBords/RequestInfo';
import { RequestContext } from '../../contexts/requestContext/requestContext';
import { ShopContext } from '../../contexts/shopsContext/shopsContext';
import { GoInfo } from 'react-icons/go'

const NewRequestForm = () => {

    const { shops } = useContext(ShopContext);
    const { dispatch } = useContext(RequestContext);
    const [hidde, setHidde] = useState(true);
    const [request, setRequest] = useState({
        id:'',
        product:'',
        quantity:'',
        price:'',
        shop: '',
        sum:'',
        done: false
    });

    const {id, product, quantity, price } = request;

    const handleChange = (e) => {
        setRequest({...request, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_REQUEST', request});
        setRequest({
            id:'',
            product:'',
            quantity:'',
            price:'',
            shop: request.shop,
            sum:'',
            done: false
        });        
    }
   
    const toggleHide = () => {
        setHidde(!hidde);
    }

    return(
        <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                { shops.length ? (
                <div className='options'>
                    {shops.map(shop => {
                        return (
                            <div key={shop.id} onChange={handleChange}>
                                <input type='radio' id={shop.name} name='shop' value={shop.name} required/>
                                <label htmlFor={shop.name}>{shop.name}</label>
                            </div>
                        )
                    })}  
                </div>
            ) : (
                <div className='emptyShops'>Your shop list is empty</div>
            )}
                <div>                            
                    <input type='text' name='id' value={id} placeholder='ID...' onChange={handleChange} required />
                    <input type='text' name='product' value={product} placeholder='Product...' onChange={handleChange} required/>
                </div>
                <div>
                    <input type='text'name='quantity' value={quantity} placeholder='Quantity...' onChange={handleChange} required />
                    <input type='text' name='price' value={price} placeholder='Price...' onChange={handleChange} required />
                </div>           
                <input type='submit' value='Create' />          
            </form>
            <i className='infoIcon'><GoInfo onClick={toggleHide} /></i>
            {
                !hidde ? ( <RequestInfo /> ) : ( null )
            }           
        </div>
    );
}

export default NewRequestForm;