import React, { useContext, useState } from 'react';
import ShopItem from '../Shops/ShopItem';
import RequestItem from '../Requests/RequestItem';
import { RequestContext } from '../../contexts/requestContext/requestContext';
import { ShopContext } from '../../contexts/shopsContext/shopsContext';

const CountRequests = () => {

    const { shops } = useContext(ShopContext);
    const { requests } = useContext(RequestContext);
    const [shop, setShop] = useState('');
    const done = requests.filter(request => request.done).length;
    const notYetDone = requests.filter(request => request.done === false).length;

    const totalExpense = (shop) => {
        const filtered = requests.filter(request => request.shop === shop);
        const total =  filtered.reduce((acc, { sum }) => acc + parseFloat(sum), 0).toFixed(2);
        return total;
    }

    const handleClick = (e) => {
        setShop(e.target.value);   
    }

    return( 
        <main className='infoMain'>
            <section className='infoRequests'>
                <h1>Request Information</h1>
                <div className='infoData'>
                    <p><span>{notYetDone} </span> create a request</p>
                    <p>Завършени<span> {done} </span>заявки</p>
                </div>
                { shops.length ? (
                <div className='shopListContainer'>
                    {shops.map(shop => {
                        return(
                            <div className='shopListInfo' key={shop.id}>
                             <ShopItem shop={shop} />
                             <button value={shop.name} onClick={handleClick}>+</button>
                            </div>
                        )
                    })}        
                    </div>
                ) : (
                    <div className='shopEmptyList'>Листа с търг.обекти е празен</div>
                )}
            </section>
            <section className='renderInfo'>
                { requests.length ? (
                    <div className='listContainer'>
                        {requests.filter(request => request.shop === shop).map(filtered => {
                            return(
                                <RequestItem request={filtered} key={filtered.id}/>
                                )
                            })}  
                       {shop ? ( <p className='totalPrice'>Обща стойност: {totalExpense(shop)}</p> ) : (null)}                            
                    </div>
                    ) : (
                    <div className='emptyList'>Листа с поръчки е празен</div>
                    )}
            </section>
        </main>
    )
}

export default CountRequests;
