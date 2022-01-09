import React from 'react';
import './Menu.css';
import home_icon_white from './home-white.png';
// import home_icon_black from './home-black.png';
import circle_icon_white from './circle-white.png';
// import circle_icon_black from './circle-black.png';
import calendar_icon_white from './calendar-white.png';
// import calendar_icon_black from './calendar-black.png';

export default function Menu() {
    function myfunction() {
        console.log('hi');
    }

    return (
        <div class='menu'>
            <div class='menu-holder'>
                {/*<img class="Menu-home" src={home_icon} alt="home-black" />*/}
                <div class="menu-list">
                    <button><img class="menu-icons" src={home_icon_white} alt="home-button" onClick={myfunction} /></button>
                    <button><img class="menu-icons" src={circle_icon_white} alt="circle-white" onClick={myfunction} /></button>
                    <button><img class="menu-icons" src={calendar_icon_white} alt="calendar-white" onClick={myfunction} /></button>
                </div>
            </div>
        </div>
    )
}

