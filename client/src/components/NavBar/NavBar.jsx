import React, { useState } from 'react'
import "./navbar.scss"
import { SearchSharp } from '@material-ui/icons'
import { Link } from "react-router-dom";



const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    //console.log(isScrolled)

    return (
        <div className={isScrolled ? "navbar  scrolled" : "navbar "}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                    <Link to="/" className='link'>
                        <span>Home</span>
                    </Link>

                    <Link to="/series" className='link'>
                        <span className='navbarmainLinks'>Series</span>
                    </Link>

                    <Link to="/movies" className='link'>
                        <span className='navbarmainLinks' >Movies</span>
                    </Link>

                    {/* <span>New And Populer</span>
                        <span>My List</span>*/}

                </div>
                <div className="right">

                    <Link to="/search" >
                        <SearchSharp className="search" />
                    </Link>



                    <img src="https://www.freepnglogos.com/uploads/telegram-logo-png-0.png" alt="" className='Tel' />

                    {/* <Notifications className="icon" />*/}

                    {/* <img
                            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />*/}

                    { /* <div className="profile">
                            <ArrowDropDown className="icon" />

                            <div className="options">
                                <span>Setting</span>
                                <span>Logout</span>
                            </div>

                        </div>*/}




                </div>


            </div>
        </div>
    )
}

export default NavBar
