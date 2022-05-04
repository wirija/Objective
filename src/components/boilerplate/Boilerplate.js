import React from 'react'
import './boilerplate.css'
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar'

function Homepage(props) {
    return (
        <div className='boiler_container'>
            <div className='boiler_Navigationbar'>
                <Navbar />
            </div>

            <div className='boiler_content_container'>
                <div className='boiler_content_container_center'>
                    <div className='boiler_sidebar'>
                        <Sidebar />
                    </div>
                    <div className='boiler_content'>
                       {props.content}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage