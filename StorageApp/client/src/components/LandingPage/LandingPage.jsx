import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { GiAlarmClock } from 'react-icons/gi';
import { FaClipboardList, FaShippingFast, FaDatabase } from 'react-icons/fa';

const LandingPage = () => {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if(hours > 5 && hours < 12){
        timeOfDay = "Good Morning";
    }else if(hours > 12 && hours < 17){
        timeOfDay = "Good Afternoon";
    }else{
        timeOfDay = "Good Evening";
    }


    return(
      <Fragment>
        <main className='homeMain'>
            <div className='leftSection'></div>
            <aside className='rightSection'>
              <div>
                <h1>{timeOfDay}, welcome<span>in our app</span></h1>
                <p>За да използваш платформата за поръчки първо трябва да създадеш
                    свои парола и потребителско име.
                </p>
                <div className='button'>
                  <Link to='/register'><button>Registration</button></Link>
                </div>               
                <p>Ако вече имаш Регистрация <Link to='/login' style={{ color: 'green', textDecoration:'none' }}> Click here</Link> </p>
              </div>
            </aside>      
        </main>
        <footer className='homeFooter'>
            <div className='infoCard'>
                <i><GiAlarmClock /></i>
                <p>Нашата платформа ще ви спести време</p>
            </div> 
            <div className='infoCard'>
                <i><FaShippingFast /></i>
                <p>Можете да коригирате заявките си докато ги изпълнявате в реално време</p>
            </div> 
            <div className='infoCard'>
                <i><FaClipboardList /></i>
                <p>Всичките Ви заявки са подредени на едно място</p>
            </div> 
            <div className='infoCard'>
                <i><FaDatabase /></i>
                    <p>Лесен и бърз достъп до вашите дани и обработката им</p>
            </div> 
        </footer>
      </Fragment>
    )
}

export default LandingPage;