import React from 'react'
import './homepage.css'
import Navbar from './../navbar/Navbar';
import Sidebar from './../sidebar/Sidebar'

function Homepage() {
    return (
        <div className='container'>
            <div className='Navigationbar'>
                <Navbar />
            </div>

            <div className='content_container'>
                <div className='content_container_center'>
                    <div className='sidebar'>
                        <Sidebar />
                    </div>
                    <div className='content'>
                       <h1> //TODO - CONTENT PANE </h1> 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage