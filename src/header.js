import React from 'react';
import profilepic from './assets/images/profilepics/vignesh.jpg'
function NavBar() {
    return (
        <nav>
            <span className='home'>
                <span id='home'>VIGNESH</span>
            </span>
            <span className='works'>
                <span id='projects'>My Works</span>
                <span id='experience'>Experience</span>
            </span>
        </nav>
    );
}

function Header() {
    return(
        <header>
            <div className='intro'>
                <a href="null"><img className='profile-pic-header' src={profilepic} alt='vignesh'></img></a>
            </div>
        </header>
    );
}

export default function SiteHeaders(){
    return(
        <>
         <NavBar />
         <Header />
        </>
    );
}