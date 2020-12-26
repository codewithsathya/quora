import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './header.css';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/premium-icon/icons/svg/3015/3015827.svg" alt=""></img>
                <div className="header__search">
                    {/*Searchicon */}
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={ListAltIcon}title="Following"/>
                <HeaderOption Icon={ AddCircleIcon }title="Create Post"/>
                <HeaderOption avatar="/broken-image.jpg" title="Me"/>
            </div>
        </div>
    )
}

export default Header