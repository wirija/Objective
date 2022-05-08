import React from 'react'
import './navbar.css';

import { FiSearch } from 'react-icons/fi'
import { FiSettings} from 'react-icons/fi'
import { GrNotification } from 'react-icons/gr'
import { BsChatSquare} from 'react-icons/bs'



function Navbar() {
    return (
        <div>
            <div className='navbar_container'>

                <div className='Logo_container'>
                    <div className='Logo'>
                        <img src={require('../../images/logo.jpeg')} />
                    </div>
                </div>

                <div className='notifications'>
                    <div className='notification_container'>
                        <div className='notification_icon'>
                            <FiSettings />
                        </div>
                        <div className='notification_number hidden'>
                           <span>1</span>
                        </div>
                    </div>

                    <div className='notification_container'>
                        <div className='notification_icon'>
                            <GrNotification />
                        </div>
                        <div className='notification_number hidden'>
                           <span>1</span>
                        </div>
                    </div>


                    <div className='notification_container'>
                        <div className='notification_icon'>
                            <BsChatSquare />
                        </div>
                        <div className='notification_number'>
                           <span>1</span>
                        </div>
                    </div>


                </div>

            </div >
        </div >
    )
}

export default Navbar