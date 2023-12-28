import React from 'react';
import profilepic from './assets/images/profilepics/vignesh_color.jpg'
function NavBar() {
    return (
        <nav className='border-bottom'>
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
        <header className='border-bottom'>
            <div className='intro'>
                <a href="null"><img className='profile-pic-header padd border circle bg-white square' src={profilepic} alt='vignesh'></img></a>
                <div className='my-name'>Vignesh</div>
                <h2 className='profile-brief'>Software Engineer with experience in Java, JavaScript, Selenium WebDriver</h2>
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