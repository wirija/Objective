import React from 'react'
import './sidebar.css'
import { BsGraphUp } from 'react-icons/bs'
import { BiPurchaseTag, BiData, BiHomeAlt, BiHelpCircle, BiLogOut, BiUser, BiListUl, BiPieChartAlt, BiNews } from 'react-icons/bi'
import { AiOutlineAim, AiOutlineAlert } from 'react-icons/ai'
import { MdOutlineFeedback, MdOutlineDashboard } from 'react-icons/md'

const data_sidebarContent = [
    {
        sectionName: "",
        links: [
            {
                icon: "BiHomeAlt",
                label: "Home",
                selected: false
            },
            {
                icon: "MdOutlineFeedback",
                label: "Feedback",
                selected: false
            },
            {
                icon: "BiHelpCircle",
                label: "Help",
                selected: false
            },
            {
                icon: "BiLogOut",
                label: "Logout",
                selected: false
            }
        ]
    },
    {
        sectionName: "Admin",
        links: [
            {
                icon: "BiListUl",
                label: "Site Settings",
                selected: false
            },
            {
                icon: "BiUser",
                label: "User management",
                selected: false
            },
            {
                icon: "BiPieChartAlt",
                label: " Site Statistics",
                selected: false
            }
        ]
    },
    {
        sectionName: "Dashboards",
        links: [
            {
                icon: "BsGraphUp",
                label: "Order to cash",
                selected: true
            },
            {
                icon: "BiPurchaseTag",
                label: "Purchase to pay",
                selected: false
            },
            {
                icon: "BiData",
                label: "Data master",
                selected: false
            },
            {
                icon: "AiOutlineAim",
                label: "K-Trace",
                selected: false
            }
        ]
    },
    {
        sectionName: "Case Management",
        links: [
            {
                icon: "MdOutlineDashboard",
                label: "Case Statistics",
                selected: false
            },
            {
                icon: "BiNews",
                label: "List of cases",
                selected: false
            },
            {
                icon: "AiOutlineAlert",
                label: "Outstanding cases",
                selected: false
            }
        ]
    }
];

function userDetails() {
    return (
        <>
            <div className='sidebar_userinfo'>
                <div className='sidebar_useravatar'>
                    <img className='sidebar_img' src={require('../../images/user/user_avatar.png')} />
                </div>
                <div className='sidebar_username'>
                    Phsp
                </div>
            </div>
        </>
    )
}


function sidebarSection(sidebarContent) {

    return (
        <>
            {userDetails()}
            {
                sidebarContent.map((item) =>
                    <>
                        <div className='sidebar_sectionName'>
                            {item.sectionName}
                        </div>

                        {item.links.map((link) =>
                            <div className={'sidebar_link ' + (link.selected ? 'selected' : '')}>
                                <div className='sidebar_link_icon'> {iconMap(link.icon)} </div>
                                <div className='sidebar_link_label'> {link.label} </div>
                            </div>)}
                    </>
                )
            }


        </>
    )
}

function iconMap(iconName) {
    switch (iconName) {
        case 'AiOutlineAim': return <AiOutlineAim />
        case 'AiOutlineAlert': return <AiOutlineAlert />
        case 'BiData': return <BiData />
        case 'BiHelpCircle': return <BiHelpCircle />
        case 'BiHomeAlt': return <BiHomeAlt />
        case 'BiListUl': return <BiListUl />
        case 'BiLogOut': return <BiLogOut />
        case 'BiNews': return <BiNews />
        case 'BiPieChartAlt': return <BiPieChartAlt />
        case 'BiPurchaseTag': return <BiPurchaseTag />
        case 'BiUser': return <BiUser />
        case 'BsGraphUp': return <BsGraphUp />
        case 'MdOutlineDashboard': return <MdOutlineDashboard />
        case 'MdOutlineFeedback': return <MdOutlineFeedback />
        default: return <BiHomeAlt />
    }
}

function sidebar() {
    return (
        <div className='sidebar_container'>

            {sidebarSection(data_sidebarContent)}

        </div>
    )
}




export default sidebar