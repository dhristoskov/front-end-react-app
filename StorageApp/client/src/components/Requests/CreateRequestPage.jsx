import React from 'react';
import RequestsList from './RequestsList';
import NewRequestForm from './NewRequestForm';
import ShopList from '../Shops/ShopList';
import CreateShopFrom from '../Shops/CreateShopForm';

const CreateRequestPage = () => {

    return(
        <div className='requestContsainer'>
            <div className='mainList'>
                <RequestsList />   
                <NewRequestForm />   
            </div>
            <div className='mainSettings'>
                <ShopList />
                <CreateShopFrom />
            </div>         
        </div>
    )
}

export default CreateRequestPage;