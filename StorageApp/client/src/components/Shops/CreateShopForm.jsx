import React, { useContext, useState } from 'react';
import { ShopContext } from '../../contexts/shopsContext/shopsContext';
import ShopInfo from '../InfoBords/ShopInfo';
import { GoInfo } from 'react-icons/go'

const CreateShopFrom = () => {

    const { dispatch } = useContext(ShopContext);
    const [hidde, setHidde] = useState(true);
    const [shop, setShop] = useState({
        id:'',
        name:'',
        notice:''
    });

    const {id, name, notice } = shop;

    const handleChange = (e) => {
        setShop({...shop, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_SHOP', shop});
        setShop({
            id:'',
            name:'',
            notice:''
        });    
    }

    const toggleHide = () => {
        setHidde(!hidde);
    }

   return (
    <div className='formShopContainer'>
        <form onSubmit={handleSubmit}>
            <input type='text' name='id' value={id} placeholder='Номер...' onChange={handleChange} required />
            <input type='text' name='name' value={name} placeholder='Име...' onChange={handleChange} required></input>
            <input type='text'name='notice' value={notice} placeholder='Бележка...' onChange={handleChange} required></input>      
            <input type='submit' value='Създай'></input>
        </form>
        <i className='infoIcon'><GoInfo onClick={toggleHide} /></i>
            {
                !hidde ? ( <ShopInfo /> ) : ( null )
            }  
    </div>
   )
}

export default CreateShopFrom;